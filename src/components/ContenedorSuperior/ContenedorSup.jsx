import React from 'react';
import './ContenedorSup.css'
import Logo from '../../assets/logo5.png';
import { useNavigate } from 'react-router';

const TopContainer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='contenedorLogoInfo'>
        <div className='contenedorLogo'>
          <img src={Logo} alt='Bank Logo' className='contenedorSupLogo' />
        </div>
        <div className='contenedorInfo2'>
          <h2 className='tituloTC'>TIPO DE CUENTA</h2>
          <p className='tipoCuenta'>cuenta corriente</p>
        </div>
        <div className='contenedorInfo'>
          <h2 className='nombre'>SAMUEL MARIN TOBON</h2>
          <p className='balance'>Total en cuenta: $10,000.00</p>
        </div>
      </div>
      <div className='contenedorBotonesContSup'>
        <button onClick={() => navigate('/inicio')} className='botonContSup'>
          Inicio
        </button>
        <button onClick={() => navigate('/transferencias')} className='botonContSup'>
          Transferencias
        </button>
        <button onClick={() => navigate('/prestamos')} className='botonContSup'>
          Prestamos
        </button>
        <button onClick={() => navigate('/reportes')} className='botonContSup'>
          Reportes
        </button>
      </div>
    </div>
  );
};

export default TopContainer;
