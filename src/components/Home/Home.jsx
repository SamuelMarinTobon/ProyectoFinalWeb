import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Fondo from '../../assets/fondo4.png';
import Logo from '../../assets/logo4.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  
  const openModal = () => {
    setModalVisible(true);
  };

  
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='home-container'>
      <header className='home-header'>
        <div className='home-logo'>
          <img src={Logo} alt='SwiftM Logo' className='home-logo' />
        </div>
        <div className='home-buttons'>
          <button onClick={() => navigate('/registro')} className='btn-create-account'>
            Crear Cuenta
          </button>
          <button onClick={() => navigate('/login')} className='btn-login'>
            Iniciar Sesión
          </button>
        </div>
      </header>

      <div className='home-content'>
        <div className='home-text'>
          <h1>Seguridad y Confianza</h1>
          <p>
            Disfruta de tranquilidad con nuestro sitio web bancario seguro y confiable. Tu bienestar financiero es
            nuestra prioridad.
          </p>
          <div className='home-buttons'>
            <button className='btn-about-us' onClick={openModal}>
              Conoce más
            </button>
          </div>
        </div>

        <div className='home-fondo'>
          <img src={Fondo} alt='Fondo de Seguridad' />
        </div>
      </div>

      
      {modalVisible && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <h2>Sobre Nosotros</h2>
            <p>
              En SMR, nos comprometemos a ofrecerte servicios financieros con los más altos estándares de seguridad
              y confianza. Estamos aquí para ayudarte a alcanzar tus metas financieras con transparencia y dedicación. 
              Da el paso y hazte parte de nuestra familia.
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

export default Home;
