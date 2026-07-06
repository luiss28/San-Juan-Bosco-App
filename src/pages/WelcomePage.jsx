import Body from '../components/Body';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Body sidebar>
      <img
        src="/YG_Together.jpeg"
        alt="Grupo Juvenil juntos"
        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block', margin: '0 auto 16px' }}
      />
      <h1 style={{ textAlign: "center"}}>Bienvenidos a la pagina oficial del Grupo Juvenil <br/>San Juan Bosco!</h1>
      <p style={{ textAlign: "center"}}>Aqui puede encontrar toda la informacion que necesite.</p>
      <br/>

      <Card className="mb-2">
        <Card.Body style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src="/Jos_Praying.jpeg"
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
        <Card.Body style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src="/MFS_Logo.jpeg"
            alt="Mision Haz Me Santo"
            style={{ width: '220px', height: '180px', objectFit: 'cover', flexShrink: 0, borderRadius: '8px' }}
          />
          <div style={{ flex: 1 }}>
            <Card.Title>Reza...</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              el rosario juvenil
            </Card.Subtitle>
            <Card.Text>
              Fundado por Mision: Haz Me Santo
            </Card.Text>
            <Button className="bisque-btn" onClick={() => navigate("/rosariojuvenil")}>Reza ahora</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-2">
        <Card.Body style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src="/SJB_Portrait.jpg"
            alt="San Juan Bosco"
            style={{ width: '220px', height: '180px', objectFit: 'cover', flexShrink: 0, borderRadius: '8px' }}
          />
          <div style={{ flex: 1 }}>
            <Card.Title>Descubre...</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              quien fue Don Bosco
            </Card.Subtitle>
            <Card.Text>
              La historia del santo de los jovenes
            </Card.Text>
            <Button className="bisque-btn" onClick={() => navigate("/donbosco")}>Leer aqui</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-2">
        <Card.Body style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src="/YG_Funny.jpeg"
            alt="Riendo juntos"
            style={{ width: '220px', height: '180px', objectFit: 'cover', flexShrink: 0, borderRadius: '8px' }}
          />
          <div style={{ flex: 1 }}>
            <Card.Title>¿Quieres unirte?</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ¡llena el formulario!
            </Card.Subtitle>
            <Card.Text>
              Estaremos en contacto contigo con más información
            </Card.Text>
            <Button className="bisque-btn" onClick={() => navigate("/interes")}>¡Quiero unirme!</Button>
          </div>
        </Card.Body>
      </Card>

    </Body>
  );
}