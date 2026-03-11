import Body from '../components/Body';
import Misterio from '../components/Oraciones';

export default function RosarioPage() {
  return (
    <Body sidebar>
      <h1>Como Rezar el Rosario</h1>
      <h3>Inicio:</h3>
      <p>
        Por la senal de la santa cruz<br/>
        De nuestros enemigos...<br/>
        En el nombre del padre, hijo, y espiritu santo<br/>
        Amen.
      </p>
      <h5>Rezar Credo:</h5>
      <p>
        Creo en...
      </p>
      <h3>Primer Misterio:</h3>
      <h5>Mon-Tue-Wed-Thurs-Fri-Sat-Sun</h5>
      <Misterio/>
      <br/>
      <h3>Segundo Misterio:</h3>
      <h5>Mon-Tue-Wed-Thurs-Fri-Sat-Sun</h5>
      <Misterio/>
      <br/>
      <h3>Tercer Misterio:</h3>
      <h5>Mon-Tue-Wed-Thurs-Fri-Sat-Sun</h5>
      <Misterio/>
      <br/>
      <h3>Cuarto Misterio:</h3>
      <h5>Mon-Tue-Wed-Thurs-Fri-Sat-Sun</h5>
      <Misterio/>
      <br/>
      <h3>Quinto Misterio:</h3>
      <h5>Mon-Tue-Wed-Thurs-Fri-Sat-Sun</h5>
      <Misterio/>
      <br/>

    </Body>
  );
}