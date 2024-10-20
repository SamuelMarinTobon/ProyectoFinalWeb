import React from 'react';
import './Deudas.css'; 
import TopContainer from '../ContenedorSuperior/ContenedorSup';

const Deudas = () => { 
  const deudas = [
    {
      id: 1,
      type: "Tarjeta de Crédito",
      amount: 1500,
    },
    {
      id: 2,
      type: "Préstamo Libre Destino",
      amount: 3000,
    },
    {
      id: 3,
      type: "Préstamo Hipotecario",
      amount: 20000,
    },
  ];

  const PagarCuota = (id) => {
    console.log(`Pago de cuota para deuda ID: ${id}`);
  };

  const PagarTotal = (id) => { 
    console.log(`Pago total para deuda ID: ${id}`);
  };

  return (
    <div>
      <TopContainer />
      <div className='contenedorDeudas'>
        <h1 className='tituloResumen'>PAGAR DEUDAS</h1>
        <div className='listaDeuda'>
          {deudas.map((deuda) => (
            <div key={deuda.id} className='deudaItem'>
              <p>
                <strong>Tipo de Crédito:</strong> {deuda.type}
              </p>
              <p>
                <strong>Valor que Debes:</strong> ${deuda.amount}
              </p>
              <button onClick={() => PagarCuota(deuda.id)} className='btnPagar'>
                Pagar Cuota
              </button>
              <button onClick={() => PagarTotal(deuda.id)} className='btnPagar'>
                Pagar Valor Total
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deudas; 