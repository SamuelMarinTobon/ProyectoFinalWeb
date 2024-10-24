import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/logo5.png';
import './Registro.css';
export default function Registro() {
  const navigate = useNavigate();
  return (
    <div className='principal'>
      <div className='ContainerRegistro'>
        <img src={logo} alt='Logo' className='logoRegistro' />
        <h1 className='EstebanquitoRegistro'>Crear Cuenta</h1>
        <input type='text' className='InputRegistro' placeholder='Nombre de Usuario' />
        <input type='email' className='InputRegistro' placeholder='Correo Electrónico' />
        <input type='telefono' className='InputRegistro' placeholder='Telefono' />
        <input type='tipocuenta' className='InputRegistro' placeholder='Tipo de Cuenta' />
        <input type='password' className='InputRegistro' placeholder='Contraseña' />
        <input type='password' className='InputRegistro' placeholder='Confirmar Contraseña' />
        <button className='BotonRegistrar'>Registrar</button>
        <p className='enlaceIrLogin'>
          ¿Ya tienes Cuenta?
          <a href='' onClick={() => navigate('/login')}>
            Iniciar Sesión
          </a>
        </p>
      </div>
    </div>
  );
}
