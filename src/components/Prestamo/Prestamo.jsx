import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Prestamo.css';

export default function SolicitudPrestamo() {
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');
  const [deuda, setDeuda] = useState(null);

  const calcularDeuda = () => {
    const interes = 0.05; // Por simplicidad asumimos un interés fijo del 5% por el plazo
    const totalDeuda = parseFloat(monto) + (parseFloat(monto) * interes * parseInt(plazo));
    setDeuda(totalDeuda);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularDeuda();
  };

  return (
    <div className='principal'>
      <div className='ContainerPrestamo'>
        <img src={logo} alt='Logo' className='logo' />
        <h1 className='EstebanquitoPrestamo'>Solicitar Préstamo</h1>
        <form onSubmit={handleSubmit}>
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
          <button type='submit' className='BotonSolicitar'>Solicitar Préstamo</button>
        </form>
        {deuda !== null && (
          <p className='ResultadoDeuda'>
            La deuda total a pagar es: <strong>${deuda.toFixed(2)}</strong>
          </p>
        )}
        <p>
          ¿Ya tienes un préstamo?
          <a href=''>Ver mis préstamos</a>
        </p>
      </div>
    </div>
  );
}