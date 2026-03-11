import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <Navbar sticky="top" className="Header">
      <Container>
        <Navbar.Brand>
          San Juan Bosco Grupo Juvenil
          <div className="text-muted fs-6">
            Parroquia San Jose y San Esteban
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}