import React, {useState,useEffect} from 'react';
import './ContenedorSup.css'
import Logo from '../../assets/logo5.png';
import { useNavigate } from 'react-router';
import axios from 'axios';


const TopContainer = ({ nombre, tipo, numero_cuenta }) => {
  const navigate = useNavigate();

  // Desde aqui
  const [balance, setBalance] = useState(10000);
  const numeroCuenta = numero_cuenta; 

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
  const [saldo1, setSaldo] = useState(0);
  const [responseMessage, setResponseMessage] = useState('');

  const obtenerSaldo = () => {
    fetch('http://localhost:3000/saldo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSaldo(data.saldo);
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage('Error de red o problema en el servidor');
      });
  };

   useEffect(() => {
     obtenerSaldo();
   }, [numero_cuenta]);

  return (
    <div>
      <div className='contenedorLogoInfo'>
        <div className='contenedorLogo'>
          <img src={Logo} alt='Bank Logo' className='contenedorSupLogo' />
        </div>
        <div className='contenedorInfo2'>
          <h2 className='tituloTC'>TIPO DE CUENTA</h2>
          <p className='tipoCuenta'>cuenta {tipo}</p>
        </div>
        <div className='contenedorInfo'>
          <h2 className='nombre'>{nombre}</h2>
          <p className='balance'>Total en cuenta: {saldo1}</p>
        </div>
      </div>
      <div className='contenedorBotonesContSup'>
        <div className='botonContSupMenu'>
          <button
            onClick={() =>
              navigate('/inicio', {
                state: {
                  saldo: saldo1,
                  nombre: nombre,
                  tipo: tipo,
                  numero_cuenta: numero_cuenta,
                },
              })
            }
            className='botonContSup'
          >
            INICIO
          </button>
        </div>

        <div className='botonContSupMenu'>
          <button className='botonContSup'>TRANSFERENCIAS</button>
          <div className='menuEmergente'>
            <button
              onClick={() =>
                navigate('/transferencia', {
                  state: { saldo: saldo1, nombre: nombre, tipo: tipo, numero_cuenta: numero_cuenta },
                })
              }
              className='botonMenuEmergente'
            >
              Transferir
            </button>
            <button
              onClick={() =>
                navigate('/deposito', {
                  state: { saldo: saldo1, nombre: nombre, tipo: tipo, numero_cuenta: numero_cuenta },
                })
              }
              className='botonMenuEmergente'
            >
              Depositar
            </button>
            <button
              onClick={() =>
                navigate('/retiros', {
                  state: { saldo: saldo1, nombre: nombre, tipo: tipo, numero_cuenta: numero_cuenta },
                })
              }
              className='botonMenuEmergente'
            >
              Retirar
            </button>
          </div>
        </div>

        <div className='botonContSupMenu'>
          <button className='botonContSup'>PRESTAMOS</button>
          <div className='menuEmergente'>
            <button
              onClick={() =>
                navigate('/prestamos', {
                  state: { saldo: saldo1, nombre: nombre, tipo: tipo, numero_cuenta: numero_cuenta },
                })
              }
              className='botonMenuEmergente'
            >
              Solicitar
            </button>
            <button
              onClick={() =>
                navigate('/deudas', {
                  state: { saldo: saldo1, nombre: nombre, tipo: tipo, numero_cuenta: numero_cuenta },
                })
              }
              className='botonMenuEmergente'
            >
              Consultar
            </button>
          </div>
        </div>

        <div className='botonContSupMenu'>
          <button
            onClick={() =>
              navigate('/reportes', {
                state: { saldo: saldo1, nombre: nombre, tipo: tipo, numero_cuenta: numero_cuenta },
              })
            }
            className='botonContSup'
          >
            REPORTES
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
