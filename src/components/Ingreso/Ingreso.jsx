import React from 'react';
import './Ingreso.css';

export default function Ingreso() {
  return (
    <div className='Container'>
      <div className='ContenedorNombreBanco'>
        <h1><strong>ESTEBANQUITO</strong></h1>
      </div>
      <div className='ContenedorNombreIngreso'>
        <h1>INGRESO</h1>
      </div>
      <div className='ContenedorUsuario'>
        <div className='EtiquetaInput'>
          <h5>Usuario:</h5>
        </div>
        <input type='text' className='InputUsuario' />
      </div>

      <div className='ContenedorContraseña'>
        <div className='EtiquetaInput'>
          <h5>Contraseña:</h5>
        </div>
        <input type='text' className='InputContraseña' />
      </div>
      <div className='ContenedorIrRegistro'>
        <a href=''>Registro</a>
      </div>
      <div className='ContenedorBotonIngreso'>
        <button className='BotonIngresar'>Ingresar</button>
      </div>
    </div>
  );
}
