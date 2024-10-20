import React, { useState } from 'react';
import logo from '../../assets/logo5.png';
import './Retiro.css';
import TopContainer from '../ContenedorSuperior/ContenedorSup';

export default function InterfazRetiros() {
  const [monto, setMonto] = useState('');
  const movimientos = [{ fecha: '2024-01-10', tipo: 'Retiro', monto: 1000, descripcion: 'Salario' }];

  return (
    <div>
      <TopContainer />

      <div className='principalRetiros'>
        <div className='ContainerRetiros'>
          <img src={logo} alt='Logo' className='logoRetiros' />
          <h1 className='EstebanquitoRetiros'>Realizar Retiros</h1>
          <input
            type='number'
            className='InputRetiros'
            placeholder='Monto'
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
          <button type='submit' className='BotonTransaccion'>
            Realizar
          </button>
        </div>
        <div className='HistorialRetiros'>
          <h2 className='tituloHistorialRetiros'>Historial de Depositos</h2>
          {movimientos.map((movimiento, index) => (
            <div key={index} className='ElementoHistorialRetiro'>
              <div className='DetalleMovimientoRetiro'>
                <p className='DetalleMovimientoRetiro'>
                  <strong>{movimiento.tipo}:</strong> {movimiento.descripcion}
                </p>
                <p className='DetalleMovimientoRetiro'>
                  <strong>Fecha:</strong> {movimiento.fecha}
                </p>
                <p className='DetalleMovimientoRetiro'>
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

