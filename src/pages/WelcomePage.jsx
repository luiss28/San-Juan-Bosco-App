import Body from '../components/Body';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Body sidebar>
      <h1 style={{ textAlign: "center"}}>Bienvenidos a la pagina oficial del Grupo Juvenil <br/>San Juan Bosco!</h1>
      <p style={{ textAlign: "center"}}>Aqui puede encontrar toda la informacion que necesite.</p>
      <br/>

      <Card className="mb-2">
        <Card.Body style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src="/YG_Person_Praying.jpg"
            alt="Persona orando"
            style={{ width: '220px', height: '180px', objectFit: 'cover', flexShrink: 0, borderRadius: '8px' }}
          />
          <div style={{ flex: 1 }}>
            <Card.Title>Aprende...</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              como rezar el rosario
            </Card.Subtitle>
            <Card.Text>
              Paso por paso. No te preocupes. Este es el guia.
            </Card.Text>
            <Button className="bisque-btn" onClick={() => navigate("/rosario")}>Aprende ahora</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-2">
        <Card.Body>
          <Card.Title>Reza...</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            el rosario juvenil
          </Card.Subtitle>
          <Card.Text>
            Fundado de Mision: Haz Me Santo
          </Card.Text>
          <Button className="bisque-btn" onClick={() => navigate("/rosariojuvenil")}>Reza ahora</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Descubre...</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            quien fue Don Bosco
          </Card.Subtitle>
          <Card.Text>
            La historia del santo de los jovenes
          </Card.Text>
          <Button className="bisque-btn" onClick={() => navigate("/donbosco")}>Leer aqui</Button>
        </Card.Body>
      </Card>


    </Body>
  );
}