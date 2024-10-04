import React from 'react';
import './Ingreso.css';

export default function Ingreso() {
  return (
    <div className='ContainerIngreso'>
      <div className='ContenedorNombreBancoIngreso'>
        <h1 className='EstebanquitoIngreso'>ESTEBANQUITO</h1>
      </div>
      <div className='ContenedorNombreIngreso'>
        <h1>INGRESO</h1>
      </div>
      <div className='ContenedorUsuarioIngreso'>
        <div className='EtiquetaInputIngreso'>
          <h5>Usuario:</h5>
        </div>
        <input type='text' className='InputUsuarioIngreso' />
      </div>

      <div className='ContenedorContraseñaIngreso'>
        <div className='EtiquetaInputIngreso'>
          <h5>Contraseña:</h5>
        </div>
        <input type='text' className='InputContraseñaIngreso' />
      </div>
      <div className='ContenedorIrRegistroDesdeIngreso'>
        <a href=''>Registro</a>
      </div>
      <div className='ContenedorBotonIngreso'>
        <button className='BotonIngresar'>Ingresar</button>
      </div>
    </div>
  );
}
