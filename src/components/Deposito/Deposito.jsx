import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo5.png';
import TopContainer from '../ContenedorSuperior/ContenedorSup';
import './Deposito.css';

export default function Deposito() {
  const location = useLocation();
  const { nombre, tipo, numero_cuenta } = location.state || {};
  const [monto, setMonto] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const movimientos = [{ fecha: '2024-01-10', tipo: 'Deposito', monto: 1000, descripcion: 'Salario' }];
 
  const realizarDeposito = () => {
    fetch('http://localhost:3000/depositar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
        monto: parseFloat(monto),
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
        console.log(error);
        setResponseMessage('Error de conexión con el servidor.');
      });
  };

  return (
    <div>
      <TopContainer nombre={nombre} tipo={tipo} numero_cuenta={numero_cuenta} />

      <div className='principalDepositos'>
        <div className='ContainerDepositos'>
          <img src={logo} alt='Logo' className='logoDepositos' />
          <p className='DescripcionDeposito'>Bienvenido, aqui puedes realizar depositos de manera rapida y segura.</p>
          <h1 className='EstebanquitoDepositos'>Realizar Depositos</h1>
          <input
            type='number'
            className='InputDepositos'
            placeholder='Monto'
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
          <button type='submit' className='BotonTransaccion' onClick={realizarDeposito}>
            Realizar
          </button>
          <p>{responseMessage}</p>
        </div>
      </div>
    </div>
  );
}
