import React, { useState } from 'react';
import logo from '../../assets/logo5.png';
import './Retiro.css';
import TopContainer from '../ContenedorSuperior/ContenedorSup';

export default function InterfazRetiros() {
  const [monto, setMonto] = useState('');

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
      </div>
    </div>
  );
}

