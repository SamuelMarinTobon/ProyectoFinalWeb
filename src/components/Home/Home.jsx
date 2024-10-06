import React from 'react';
import './Home.css';
import logo from '../../assets/logo2.png';

export default function Home() {
  return (
    <div className='Container123'>
      <div className='ContainerHome'>
        <img className='logo2' src={logo} alt='Logo' />
      </div>
      <div className='ContainerHomeResultados'></div>
    </div>
  );
}
