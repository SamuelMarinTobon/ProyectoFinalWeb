import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopContainer from '../ContenedorSuperior/ContenedorSup';
import './Deudas.css';

const Deudas = () => {
  const location = useLocation();
  const { nombre, tipo, numero_cuenta } = location.state || {};
  const [responseMessage, setResponseMessage] = useState('');
  const [deudas, setDeudas] = useState([]);

  const verPrestamos = () => {
    fetch('http://localhost:3000/ver_prestamos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setDeudas(data.prestamos);
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage('Error de red o problema en el servidor');
      });
  };

  const pagarPrestamos = (idPrestamo) => {
    fetch('http://localhost:3000/pagar_prestamo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
        idPrestamo: idPrestamo,
        tipoPago: 'total',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResponseMessage(data.message);
          verPrestamos();
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage('Error de red o problema en el servidor');
      });
  };

  const pagarCuota = (idPrestamo) => {
    fetch('http://localhost:3000/pagar_prestamo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
        idPrestamo: idPrestamo,
        tipoPago: 'cuota',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResponseMessage(data.message);
          verPrestamos();
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage('Error de red o problema en el servidor');
      });
  };

  useEffect(() => {
    verPrestamos();
  }, [numero_cuenta]);

  return (
    <div>
      <TopContainer nombre={nombre} tipo={tipo} numero_cuenta={numero_cuenta} />
      <div className='contenedorDeudas'>
        <h1 className='tituloResumen'>PAGAR DEUDAS</h1>
        <p>{responseMessage}</p>
        <div className='listaDeuda'>
          {deudas.map((deuda) => (
            <div key={deuda.prestamo_id} className='deudaItem'>
              <p>
                <strong>Valor que Debes:</strong> ${deuda.monto}
              </p>
              <p>
                <strong>Cuota Mensual:</strong> ${deuda.cuota_mensual}
              </p>
              <button onClick={() => pagarCuota(deuda.prestamo_id)} className='btnPagar'>
                Pagar Cuota
              </button>
              <button onClick={() => pagarPrestamos(deuda.prestamo_id)} className='btnPagar'>
                Pagar Valor Total
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deudas;
