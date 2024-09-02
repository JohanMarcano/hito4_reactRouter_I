import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'; 
import { formatCurrency } from './utils'; 
//import { Link } from 'react-router-dom';

function MyNavbar() {
  const total = 25000;
  const token = false; // Cambia esto a `true` para simular un usuario logueado

  return (
    <Navbar bg="dark" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home" className='text-white'>Pizzería Mamma Mía!</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home"><Button variant="outline-light">🍕Home</Button></Nav.Link>
          <Nav.Link href="#features"><Button variant="outline-light">🔓Profile</Button></Nav.Link> 
          <Nav.Link href="#features"><Button variant="outline-light">🔓Profile</Button></Nav.Link>  
          <Nav.Link href="#features"><Button variant="outline-light">🔐Login</Button></Nav.Link>  
          <Nav.Link href="#features"><Button variant="outline-light">🔐Register</Button></Nav.Link>    
        <Nav.Link href="#pricing"><Button variant="outline-primary">🛒Total: ${formatCurrency(total)}</Button></Nav.Link>
      </Nav>
    </Container>
  </Navbar>


  );
}

export default MyNavbar;