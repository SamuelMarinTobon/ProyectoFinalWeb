import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Cambiar el estado cada vez que se hace clic
  };

  const menuItems = [
    { label: 'Inicio', path: '/inicio' },
    { label: 'Transferir', path: '/transferencia' },
    { label: 'Depositar', path: '/deposito' },
    { label: 'Deudas', path: '/deudas' },
    { label: 'Retiros', path: '/retiros' },
    { label: 'Préstamos', path: '/prestamos' },
    { label: 'Reportes', path: '/reportes' },
    { label: 'Cerrar sesión', path: '/home' }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>☰</button>
      <div className="sidebar-content">
        {menuItems.map((item, index) => (
          <a key={index} href={item.path} className="sidebar-item">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
