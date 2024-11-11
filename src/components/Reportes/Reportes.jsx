import React, {useState, useEffect} from 'react';
import TopContainer from '../ContenedorSuperior/ContenedorSup';
import './Reportes.css';
import axios from 'axios';


  const Reportes = () => {
    const [ingresosTotales, setIngresosTotales] = useState(0);
    const [egresosTotales, setEgresosTotales] = useState(0);
    const [deudasPendientes, setDeudasPendientes] = useState(0);
    const [movimientos, setMovimientos] = useState([]);
  
    useEffect(() => {
      const obtenerMovimientos = async () => {
        const numeroCuenta = localStorage.getItem('numeroCuenta'); // Recupera el número de cuenta
        try {
          const response = await axios.post('http://localhost:3000/movimientos', {
            numeroCuenta,
          });
    
          if (response.data.success) {
            setMovimientos(response.data.movimientos);
            calcularResumen(response.data.movimientos);
          }
        } catch (error) {
          console.error('Error al obtener movimientos:', error);
        }
      };
  
      const calcularResumen = (movimientos) => {
        let ingresos = 0;
        let egresos = 0;
        let deudas = 0;
      
        movimientos.forEach((mov) => {
          if (mov.tipo === 'Ingreso') ingresos += parseFloat(mov.monto);
          if (mov.tipo === 'Egreso') egresos += parseFloat(mov.monto);
          if (mov.tipo === 'Deuda') deudas += parseFloat(mov.monto);
        });
  
        setIngresosTotales(ingresos);
        setEgresosTotales(egresos);
        setDeudasPendientes(deudas);
      };
  
      obtenerMovimientos();
    }, []);
  
    return (
      <div>
        <TopContainer />
        <div className='principalResportes'>
          <h1 className='tituloResumen'>RESUMEN DE REPORTES</h1>
  
          <div className='contenedorDeResumenes'>
            <div className='contenedorResumen'>
              <h2 className='textoResumen'>INGRESOS TOTALES</h2>
              <p className='textoingresos'>${ingresosTotales}</p>
              <p className='textoDescripcionResumen'>Histórico de ingresos acumulados.</p>
            </div>
            <div className='contenedorResumen'>
              <h2 className='textoResumen'>EGRESOS TOTALES</h2>
              <p className='textoEgresos'>${egresosTotales}</p>
              <p className='textoDescripcionResumen'>Histórico de todos los egresos.</p>
            </div>
            <div className='contenedorResumen'>
              <h2 className='textoResumen'>DEUDAS PENDIENTES</h2>
              <p className='textoDeudads'>${deudasPendientes}</p>
              <p className='textoDescripcionResumen'>Total de deudas aún por pagar.</p>
            </div>
          </div>
  
          <h2 className='tituloHistorico'>Histórico de Movimientos</h2>
          <table className='tablaHistorico'>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Tipo</th>
                <th>Monto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {movimientos.map((data, index) => (
                <tr key={index}>
                  <td>{data.fecha}</td>
                  <td>{data.tipo}</td>
                  <td>${data.monto}</td>
                  <td>{data.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Reportes;