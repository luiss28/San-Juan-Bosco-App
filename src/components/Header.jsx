import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
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
      </Container>
    </Navbar>
  );
}