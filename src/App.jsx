import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Ingreso from './components/Ingreso/Ingreso';

function App() {
  return (
    <>
      <div className='principal'>
        <Home />
      </div>
    </>
    <Router>
      <Routes>
        <Route path='/login' element={<Ingreso />} />
  
      </Routes>
    </Router>
  );
}

export default App;
