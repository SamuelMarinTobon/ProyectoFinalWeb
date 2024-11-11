/*Desde aqui import React from 'react';
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
} hasta aqui*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import logo from '../../assets/logo5.png';
import './Ingreso.css';

export default function Ingreso() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      if (response.data.success) {
        const { numero_cuenta } = response.data.user;
        localStorage.setItem('numeroCuenta', numero_cuenta); // Guarda el número de cuenta
        navigate('/inicio'); // Redirige a la pantalla de inicio
      } else {
        setError(response.data.message); // Muestra el mensaje de error
      }
    } catch (err) {
      console.error('Error en login:', err);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div className='principal'>
      <div className='ContainerIngreso'>
        <img src={logo} alt='Logo' className='logoIngreso' />
        <h1 className='EstebanquitoIngreso'>Iniciar sesión</h1>
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
        <button className='BotonIngresara' onClick={handleLogin}>
          Ingresar
        </button>
        {error && <p className='error'>{error}</p>}
        <p>
          ¿No tienes Cuenta?{' '}
          <a href='' onClick={() => navigate('/registro')}>
            Registro
          </a>
        </p>
      </div>
    </div>
  );
}
