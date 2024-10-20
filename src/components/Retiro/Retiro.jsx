import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Retiro.css';

export default function InterfazRetiros() {
  const [monto, setMonto] = useState('');
  const [tipoTransaccion, setTipoTransaccion] = useState('deposito');
  const [historial, setHistorial] = useState([]);

  const manejarTransaccion = (e) => {
    e.preventDefault();
    const nuevaTransaccion = {
      id: historial.length + 1,
      tipo: tipoTransaccion,
      monto: parseFloat(monto),
      fecha: new Date().toLocaleString(),
    };
    setHistorial([...historial, nuevaTransaccion]);
    setMonto('');
  };

  return (
    <div className='principal'>
      <div className='ContainerRetiros'>
        <img src={logo} alt='Logo' className='logo' />
        <h1 className='EstebanquitoRetiros'>Realizar Transacciones</h1>

        <form onSubmit={manejarTransaccion}>
          <select 
            className='SelectTransaccion' 
            value={tipoTransaccion} 
            onChange={(e) => setTipoTransaccion(e.target.value)}
          >
            <option value='deposito'>Depósito</option>
            <option value='retiro'>Retiro</option>
            <option value='transferencia'>Transferencia</option>
          </select>
          <input 
            type='number' 
            className='InputRetiros' 
            placeholder='Monto' 
            value={monto} 
            onChange={(e) => setMonto(e.target.value)} 
            required 
          />
          <button type='submit' className='BotonTransaccion'>Realizar</button>
        </form>

        <h2>Historial de Transacciones</h2>
        <ul className='ListaTransacciones'>
          {historial.map((transaccion) => (
            <li key={transaccion.id}>
              {`${transaccion.tipo.charAt(0).toUpperCase() + transaccion.tipo.slice(1)}: $${transaccion.monto} - Fecha: ${transaccion.fecha}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}