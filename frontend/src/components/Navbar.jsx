import React from 'react';
import Button from 'react-bootstrap/Button';
import './Navbar.css'; 
import { formatCurrency } from './utils'; 

function Navbar() {
  const total = 25000;
  const token = false; // Cambia esto a `true` para simular un usuario logueado

  return (
    <nav className="navbar-container">
      <p className="navbar-brand">Pizzería Mamma Mía!</p>
      <ul className="navbar-list">
        <li><Button variant="outline-light">🍕Home</Button></li>
        {token ? (
          <>
            <li><Button variant="outline-light">🔓Profile</Button></li>
            <li><Button variant="outline-light">🔒Logout</Button></li>
          </>
        ) : (
          <>
            <li><Button variant="outline-light">🔐Login</Button></li>
            <li><Button variant="outline-light">🔐Register</Button></li>
          </>
        )}
        <li><Button variant="outline-primary">🛒Total: ${formatCurrency(total)}</Button></li>
      </ul>
    </nav>
  );
}

export default Navbar;