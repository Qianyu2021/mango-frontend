import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import mangologo from '../image/mangologo.webp';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={mangologo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes" className={activeLink === 'recipes' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('recipes')}>Recipes</Nav.Link>
            <Nav.Link as={Link} to="/hiking" className={activeLink === 'hiking' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hiking')}>Hiking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
