import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import logo from '../../assets/logo5.png';
import './Ingreso.css';

export default function Ingreso() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const BotonLogin = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.user);
        // Maneja la respuesta del backend
        if (data.success) {
          navigate('/inicio', {
            state: {
              nombre: data.user.nombre,
              tipo: data.user.tipo,
              numero_cuenta: data.user.numero_cuenta
            },
          });
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setResponseMessage('Error de conexión con el servidor.');
      });
  };

  return (
    <div className='principal'>
      <div className='ContainerIngreso'>
        <img src={logo} alt='Logo' className='logoIngreso' />
        <h1 className='EstebanquitoIngreso'>Iniciar sesion</h1>
        <input
          type='text'
          className='InputIngreso'
          placeholder='Usuario'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='InputIngreso'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='BotonIngresara' onClick={BotonLogin}>
          Ingresar
        </button>
        <p>{responseMessage}</p>
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
