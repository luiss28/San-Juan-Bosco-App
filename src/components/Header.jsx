import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const offcanvasId = `offcanvasNavbar`;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navItems = (
    <>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" end onClick={handleClose}>Menu de Bienvenida</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/rosario" end onClick={handleClose}>Rezar el Rosario</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/rosariojuvenil" onClick={handleClose}>Rosario Juvenil</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/donbosco" onClick={handleClose}>¿Quien fue Don Bosco?</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/interes" onClick={handleClose}>Formulario de Interes</Nav.Link>
      </Nav.Item>
    </>
  );

  return (
    <Navbar sticky="top" className="Header">
      <Container>
        <Navbar.Brand className="d-flex align-items-center gap-3">
          <img
            src="/YG_Logo.jpg"
            alt="YG logo"
            style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <div>
            <div>San Juan Bosco Grupo Juvenil</div>
            <div className="text-muted fs-6">
              Parroquia San Jose y San Esteban
            </div>
          </div>
        </Navbar.Brand>

        {/* Mobile hamburger placed in Header */}
        <button className="sidebar-toggle d-md-none" onClick={handleShow} aria-controls={offcanvasId} aria-label="Open menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Offcanvas show={show} onHide={handleClose} id={offcanvasId} aria-labelledby={`${offcanvasId}-label`} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`${offcanvasId}-label`}>Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-sidebar">
            <Nav variant="pills" className="flex-column">
              {navItems}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}