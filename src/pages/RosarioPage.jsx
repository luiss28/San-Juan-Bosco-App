import Body from '../components/Body';
import Misterio from '../components/Oraciones';

export default function RosarioPage() {
  return (
    <Body sidebar>
      <h1 style={{textAlign:"center"}}>Como Rezar el Rosario</h1>
      <h3 style={{textAlign:"center"}}>Inicio:</h3>
      <p style={{textAlign:"center"}}>
        Por la senal de la santa cruz<br/>
        De nuestros enemigos...<br/>
        En el nombre del padre, hijo, y espiritu santo<br/>
        Amen.
      </p>
      <h5 style={{textAlign:"center"}}>Rezar Credo:</h5>
      <p style={{textAlign:"center"}}>
        Creo en...
      </p>
      <hr/>
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