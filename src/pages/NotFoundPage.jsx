import { Link } from 'react-router-dom';
import Body from '../components/Body';

export default function NotFoundPage() {
  return (
    <Body sidebar>
      <div className="text-center py-5">
        <h1 className="mb-3">Página no encontrada</h1>
        <p className="mb-4">La dirección que ingresaste no existe en este sitio.</p>
        <Link to="/" className="btn btn-primary not-found-button">
          Volver al inicio
        </Link>
      </div>
    </Body>
  );
}
