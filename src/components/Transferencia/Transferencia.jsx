import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo5.png';
import TopContainer from '../ContenedorSuperior/ContenedorSup';
import './Transferencia.css';

export default function Transferencia() {
  const location = useLocation();
  const { nombre, tipo, numero_cuenta } = location.state || {};
  const navigate = useNavigate();

  // Estados
  const [monto, setMonto] = useState(''); // Estado para el monto de la transferencia
  const [tipoCuenta, setTipoCuenta] = useState(''); // Estado para el Tipo de cuenta
  const [numeroCuenta, setNumeroCuenta] = useState(''); // Estado para el número de cuenta
  const [banco, setBanco] = useState(''); // Estado para el banco seleccionado
  const [responseMessage, setResponseMessage] = useState('');

  // Lista de bancos
  const bancos = [
    'Banco Agrario',
    'Banco AV Villas',
    'Banco Caja Social',
    'Banco de Bogotá',
    'Banco de Occidente',
    'Banco Popular',
    'Banco Santander',
    'Bancolombia',
    'BBVA',
    'Citybank',
    'Davivienda',
    'ITAU',
    'RappiPay',
    'Scotiabank Colpatria',
  ];

  const realizarTransferencia = () => {
    fetch('http://localhost:3000/transferir', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuentaOrigen: numero_cuenta,
        numeroCuentaDestino: numeroCuenta,
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

      <div className='principalTransferencias'>
        <div className='ContainerTransferencias'>
          <img src={logo} alt='Logo' className='logoTransferencias' />
          <h1 className='EstebanquitoTransferencias'>Realizar Transferencia</h1>
          <select
            className='InputTransferencias'
            value={banco}
            onChange={(e) => setBanco(e.target.value)} // Actualiza el estado 'bancoSeleccionado'
            required
          >
            <option value='' disabled>
              Seleccione el banco destino
            </option>
            {bancos.map((banco, index) => (
              <option key={index} value={banco}>
                {banco}
              </option>
            ))}
          </select>

          <input
            type='text'
            className='InputTransferencias'
            placeholder='Número de Cuenta'
            value={numeroCuenta}
            onChange={(e) => setNumeroCuenta(e.target.value)} // Actualiza el estado 'numeroCuenta'
            required
          />
          <input
            type='number'
            className='InputTransferencias'
            placeholder='Monto'
            value={monto}
            onChange={(e) => setMonto(e.target.value)} // Actualiza el estado 'monto'
            required
          />

          <button type='submit' className='BotonTransaccion' onClick={realizarTransferencia}>
            Realizar
          </button>
          <p>{responseMessage}</p>
        </div>
      </div>
    </div>
  );
}
