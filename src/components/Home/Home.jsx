/*import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className='ContainerHome'>
      <div className='ContainerNombreBancoHome'>
        <h1 className='NombreBancoHome'>ESTEBANQUITO</h1>
      </div>
    </div>
  );
}
*/
import React from 'react';
import { useNavigate } from 'react-router';
import Fondo from '../../assets/fondo4.png';
import Logo from '../../assets/logo4.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
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
            Disfruta de tranquilidad con nuestra sitio web bancario seguro y confiable. Tu bienestar financiero es
            nuestra prioridad.
          </p>
          <div className='home-buttons'>
            <button className='btn-about-us'>Conoce más</button>
          </div>
        </div>

        <div className='home-fondo'>
          <img src={Fondo} alt='Fondo de Seguridad' />
        </div>
      </div>
    </div>
  );
};

export default Home;
