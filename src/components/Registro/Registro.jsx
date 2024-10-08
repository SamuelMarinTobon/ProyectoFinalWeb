import React from 'react';
import logo from '../../assets/logo.png';
import './Registro.css'; 

export default function Registro() {
  return (
    <div className='principal'>
      <div className='ContainerRegistro'>
        <img src={logo} alt='Logo' className='logo' />
        <h1 className='EstebanquitoRegistro'>Crear Cuenta</h1>
        <input type='text' className='InputRegistro' placeholder='Nombre de Usuario' />
        <input type='email' className='InputRegistro' placeholder='Correo Electrónico' />
        <input type='password' className='InputRegistro' placeholder='Contraseña' />
        <input type='password' className='InputRegistro' placeholder='Confirmar Contraseña' />
        <button className='BotonRegistrar'>Registrar</button>
        <p>
          ¿Ya tienes Cuenta?
          <a href=''>Iniciar Sesión</a>
        </p>
      </div>
    </div>
  );
}
