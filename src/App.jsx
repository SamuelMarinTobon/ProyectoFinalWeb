import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Ingreso from './components/Ingreso/Ingreso';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Ingreso />} />
  
      </Routes>
    </Router>
  );
}

export default App;
