import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/logo5.png';
import './Ingreso.css';

export default function Ingreso() {
  const navigate = useNavigate();
  return (
    <div className='principal'>
      <div className='ContainerIngreso'>
        <img src={logo} alt='Logo' className='logoIngreso' />
        <h1 className='EstebanquitoIngreso'>Iniciar sesion</h1>
        <input type='text' className='InputIngreso' placeholder='Usuario' />
        <input type='text' className='InputIngreso' placeholder='Contraseña' />
        <button className='BotonIngresara' onClick={() => navigate('/inicio')}>
          Ingresar
        </button>
        <p>
          ¿No tienes Cuenta?
          <a href='' onClick={() => navigate('/registro')}>
            Registro
          </a>
        </p>
      </div>
    </div>
  );
}
