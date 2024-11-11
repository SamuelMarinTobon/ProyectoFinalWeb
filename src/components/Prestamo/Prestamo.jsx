import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo5.png';
import TopContainer from '../ContenedorSuperior/ContenedorSup';
import './Prestamo.css';

export default function SolicitudPrestamo() {
  const navigate = useNavigate();
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const location = useLocation();
  const { nombre, tipo, numero_cuenta } = location.state || {};

  const solicitarPrestamo = () => {
    fetch('http://localhost:3000/solicitar_prestamo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
        monto: parseFloat(monto),
        plazo: parseInt(plazo),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResponseMessage(data.message);
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage('Error de red o problema en el servidor');
      });
  };

  return (
    <div>
      <TopContainer nombre={nombre} tipo={tipo} numero_cuenta={numero_cuenta} />
      <div className='principalSolicitudPrestamo'>
        <div className='ContainerPrestamo'>
          <img src={logo} alt='Logo' className='logoSolicitudPrestamo' />
          <h1 className='EstebanquitoPrestamo'>Solicitar Préstamo</h1>

          <input
            type='number'
            className='InputPrestamo'
            placeholder='Monto del Préstamo'
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
          <input
            type='number'
            className='InputPrestamo'
            placeholder='Plazo en meses'
            value={plazo}
            onChange={(e) => setPlazo(e.target.value)}
            required
          />
          <button className='BotonSolicitar' onClick={solicitarPrestamo}>
            Solicitar Préstamo
          </button>

          <p>{responseMessage}</p>
        </div>
      </div>
    </div>
  );
}
