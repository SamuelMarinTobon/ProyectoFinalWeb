import React from 'react';
import './Deudas.css'; 

const Deudas = () => { 
  const userName = "Juan Pérez"; // Nombre del cliente
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
    <div className="deuda-container">
      <h1>Bienvenido, {userName}</h1>
      <h2>Tus Deudas</h2>
      <div className="deuda-list">
        {deudas.map(deuda => (
          <div key={deuda.id} className="deuda-item">
            <p><strong>Tipo de Crédito:</strong> {deuda.type}</p>
            <p><strong>Valor que Debes:</strong> ${deuda.amount}</p>
            <button onClick={() => PagarCuota(deuda.id)} className="btn-pay-installment">Pagar Cuota</button>
            <button onClick={() => PagarTotal(deuda.id)} className="btn-pay-total">Pagar Valor Total</button> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deudas; 