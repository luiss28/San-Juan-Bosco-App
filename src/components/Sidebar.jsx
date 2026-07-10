import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

  const navItems = (
    <>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" end>Menu de Bienvenida</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/rosario" end>Rezar el Rosario</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/rosariojuvenil">Rosario Juvenil</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/donbosco">¿Quien fue Don Bosco?</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/interes">Formulario de Interes</Nav.Link>
      </Nav.Item>
    </>
  );

  return (
    <Navbar sticky="top" bg="white" className="Sidebar">
      <Container fluid>
        {/* Desktop sidebar: visible md and up */}
        <div className="d-none d-md-block">
          <Nav variant="pills" className="flex-column">
            {navItems}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}