import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Fondo from '../../assets/fondo4.png';
import Logo from '../../assets/logo4.png';
import './inicio.css';
import Sidebar from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import TopContainer from '../ContenedorSuperior/ContenedorSup';


const inicio = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false); 
  const location = useLocation();
  const { nombre, tipo, numero_cuenta } = location.state || {};
  
  const openModal = () => {
    setModalVisible(true);
  };

  
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='inicio-container'>
      <TopContainer nombre={nombre} tipo={tipo} numero_cuenta={numero_cuenta} />

      <div className='inicio-content'>
        <div className='inicio-text'>
          <h1>Seguridad y Confianza</h1>
          <p>
            Disfruta de tranquilidad con nuestro sitio web bancario seguro y confiable. Tu bienestar financiero es
            nuestra prioridad.
          </p>
          <div className='inicio-buttons'>
            <button className='btn-about-us' onClick={openModal}>
              Conoce más
            </button>
          </div>
        </div>

        <div className='inicio-fondo'>
          <img src={Fondo} alt='Fondo de Seguridad' />
        </div>
      </div>

      {modalVisible && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <h2>Sobre Nosotros</h2>
            <p>
              En SMR, nos comprometemos a ofrecerte servicios financieros con los más altos estándares de seguridad y
              confianza. Estamos aquí para ayudarte a alcanzar tus metas financieras con transparencia y dedicación. Da
              el paso y hazte parte de nuestra familia.
            </p>
            <button onClick={closeModal} className='btn-close-modal'>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default inicio;
