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
        <div className='botonContSupMenu'>
          <button onClick={() => navigate('/inicio')} className='botonContSup'>
            INICIO
          </button>
        </div>

        <div className='botonContSupMenu'>
          <button onClick={() => navigate('/transferencias')} className='botonContSup'>
            TRANSFERENCIAS
          </button>
          <div className='menuEmergente'>
            <button onClick={() => navigate('/opcion')} className='botonMenuEmergente'>
              Transferir
            </button>
            <button onClick={() => navigate('/opciom')} className='botonMenuEmergente'>
              Depositar
            </button>
            <button onClick={() => navigate('/opcion')} className='botonMenuEmergente'>
              Retirar
            </button>
          </div>
        </div>

        <div className='botonContSupMenu'>
          <button onClick={() => navigate('/prestamos')} className='botonContSup'>
            PRESTAMOS
          </button>
          <div className='menuEmergente'>
            <button onClick={() => navigate('/opcion')} className='botonMenuEmergente'>
              Solicitar
            </button>
            <button onClick={() => navigate('/deudas')} className='botonMenuEmergente'>
              Consultar
            </button>
          </div>
        </div>

        <div className='botonContSupMenu'>
          <button onClick={() => navigate('/reportes')} className='botonContSup'>
            REPORTES
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
