/*Desde aqui import React from 'react';
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
