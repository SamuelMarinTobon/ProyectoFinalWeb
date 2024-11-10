import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/logo5.png';
import './Registro.css';
export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipocuenta, setTipoCuenta] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarpassword, setConfirmarPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const Registro = () => {
    if (password !== confirmarpassword) {
      setResponseMessage('las contraseñas no coinciden');
      return;
    }
    fetch('http://localhost:3000/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre,
        email: email,
        contraseña: password,
        telefono: telefono,
        tipocuenta: tipocuenta,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate('/login');
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
      <div className='ContainerRegistro'>
        <img src={logo} alt='Logo' className='logoRegistro' />
        <h1 className='EstebanquitoRegistro'>Crear Cuenta</h1>
        <input
          type='text'
          className='InputRegistro'
          placeholder='Nombre de Usuario'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type='email'
          className='InputRegistro'
          placeholder='Correo Electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='telefono'
          className='InputRegistro'
          placeholder='Telefono'
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type='tipocuenta'
          className='InputRegistro'
          placeholder='Tipo de Cuenta'
          value={tipocuenta}
          onChange={(e) => setTipoCuenta(e.target.value)}
        />
        <input
          type='password'
          className='InputRegistro'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          className='InputRegistro'
          placeholder='Confirmar Contraseña'
          value={confirmarpassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
        />
        <button className='BotonRegistrar' onClick={Registro}>
          Registrar
        </button>
        <p>{responseMessage}</p>
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
