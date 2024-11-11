import React, {useState,useEffect} from 'react';
import './ContenedorSup.css'
import Logo from '../../assets/logo5.png';
import { useNavigate } from 'react-router';
import axios from 'axios';


const TopContainer = () => {
  const navigate = useNavigate();

  // Desde aqui
  const [balance, setBalance] = useState(10000);
  const numeroCuenta = 'CUENTA001'; 

  useEffect(() => {
    const obtenerBalance = async () => {
      try {
        const response = await axios.post('http://localhost:3000/balance', { numeroCuenta });
        if (response.data.success) {
          setBalance(response.data.balance);
        }
      } catch (error) {
        console.error('Error al obtener el balance:', error);
      }
    };

    obtenerBalance();
  }, [numeroCuenta]);
  // hasta aqui

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
          
          {/* <p className='balance'>Total en cuenta: $1.000</p> */}
          <p className='balance'>Total en cuenta: ${balance ? balance.toFixed(2) : '0.00'}</p>
        </div>
      </div>
      <div className='contenedorBotonesContSup'>
        <div className='botonContSupMenu'>
          <button onClick={() => navigate('/inicio')} className='botonContSup'>
            INICIO
          </button>
        </div>

        <div className='botonContSupMenu'>
          <button className='botonContSup'>TRANSFERENCIAS</button>
          <div className='menuEmergente'>
            <button onClick={() => navigate('/transferencia')} className='botonMenuEmergente'>
              Transferir
            </button>
            <button onClick={() => navigate('/deposito')} className='botonMenuEmergente'>
              Depositar
            </button>
            <button onClick={() => navigate('/retiros')} className='botonMenuEmergente'>
              Retirar
            </button>
          </div>
        </div>

        <div className='botonContSupMenu'>
          <button className='botonContSup'>PRESTAMOS</button>
          <div className='menuEmergente'>
            <button onClick={() => navigate('/prestamos')} className='botonMenuEmergente'>
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
