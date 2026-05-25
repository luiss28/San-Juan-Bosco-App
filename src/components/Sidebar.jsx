import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const member = JSON.parse(localStorage.getItem("member"));

  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav variant="pills" className="flex-column">
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
          <Nav.Link as={NavLink} to="/donbosco">Quien fue Don Bosco?</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/members">Ver miembros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/register">Registrate ahora!</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}