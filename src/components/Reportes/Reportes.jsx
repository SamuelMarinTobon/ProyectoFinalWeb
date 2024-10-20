import React from 'react';
import TopContainer from '../ContenedorSuperior/ContenedorSup';
import './Reportes.css';

const Reportes = () => {
  const ingresosTotales = 5000;
  const egresosTotales = 3000;
  const deudasPendientes = 2000;

  const movimientos = [
    { fecha: '2024-01-10', tipo: 'Ingreso', monto: 1000, descripcion: 'Salario' },
    { fecha: '2024-01-15', tipo: 'Egreso', monto: 500, descripcion: 'Compra supermercado' },
    { fecha: '2024-01-20', tipo: 'Deuda', monto: 200, descripcion: 'Pago tarjeta de crédito' },
    // Más movimientos...
  ];
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
