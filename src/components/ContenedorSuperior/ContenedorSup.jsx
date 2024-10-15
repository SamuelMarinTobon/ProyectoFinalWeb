import React from 'react';
import './ContenedorSup.css'
import Logo from '../../assets/logo5.png';

const TopContainer = () => {
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
        <button className='botonContSup'>Inicio</button>
        <button className='botonContSup'>Transferencias</button>
        <button className='botonContSup'>Préstamos</button>
        <button className='botonContSup'>Reportes</button>
      </div>
    </div>
  );
};

export default TopContainer;
