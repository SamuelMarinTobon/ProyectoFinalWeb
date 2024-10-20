import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Ingreso from './components/Ingreso/Ingreso';
import Deudas from './components/InfoDeudas/Deudas';
import Registro from './components/Registro/Registro';
import Prestamos from './components/Prestamo/Prestamo';
import Retiros from './components/Retiro/Retiro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Ingreso />} />
        <Route path='/home' element={<Home />} />
        <Route path='/deudas' element={<Deudas />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/prestamos' element={<Prestamos />} />
        <Route path='/retiros' element={<Retiros />} />
      </Routes>
    </Router>
  );
}

export default App;
