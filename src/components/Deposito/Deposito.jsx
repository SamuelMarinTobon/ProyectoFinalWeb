import React, { useState } from 'react';
import logo from '../../assets/logo5.png';
import './Deposito.css';
import TopContainer from '../ContenedorSuperior/ContenedorSup';
import { useLocation } from 'react-router-dom';


export default function Deposito() {
  const location = useLocation();
  const { nombre, tipo, numero_cuenta } = location.state || {};
  const [monto, setMonto] = useState('');

  const movimientos = [
    { fecha: '2024-01-10', tipo: 'Deposito', monto: 1000, descripcion: 'Salario' },

  ];
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
          <button type='submit' className='BotonTransaccion'>
            Realizar
          </button>
        </div>
        <div className='HistorialDepositos'>
          <h2 className='tituloHistorialDepositos'>Historial de Depositos</h2>
          {movimientos.map((movimiento, index) => (
            <div key={index} className='ElementoHistorialDepositos'>
              <div className='DetalleMovimiento'>
                <p className='DetalleMovimiento'>
                  <strong>{movimiento.tipo}:</strong> {movimiento.descripcion}
                </p>
                <p className='DetalleMovimiento'>
                  <strong>Fecha:</strong> {movimiento.fecha}
                </p>
                <p className='DetalleMovimiento'>
                  <strong>Monto:</strong> ${movimiento.monto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
