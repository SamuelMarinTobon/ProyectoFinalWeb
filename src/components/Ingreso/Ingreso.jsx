import React from 'react';
import './Ingreso.css';
import logo from '../../assets/logo.png';


export default function Ingreso() {
  return (
    <div className='ContainerIngreso'>
      <img src={logo} alt='Logo' className='logo' />
      <h1 className='EstebanquitoIngreso'>Iniciar sesion</h1>
      <input type='text' className='InputIngreso' placeholder='Usuario' />
      <input type='text' className='InputIngreso' placeholder='Contraseña' />
      <button className='BotonIngresara'>Ingresar</button>
      <p>
        ¿No tienes Cuenta?
        <a href=''>Registro</a>
      </p>
    </div>
  );
}
