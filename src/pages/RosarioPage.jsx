import Body from '../components/Body';
import Misterio from '../components/Oraciones';
import PadreNuestro from '../components/PadreNuestro';
import AveMaria from '../components/AveMaria';
import Gloria from '../components/Gloria';
import Stepper, { Step } from '../components/Stepper';

export default function RosarioPage() {
  return (
    <Body sidebar>
      <div style={{ display: 'flex', gap: '5px', marginBottom: '16px', alignItems: 'stretch' }}>
        <img
          src="/Rosary.png"
          alt="Rezando el rosario"
          style={{ flex: '1 1 0', width: '0', maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
        />
        <img
          src="/YG_w_Mary.jpg"
          alt="Rezando el rosario"
          style={{ flex: '1 1 0', width: '0', maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
        />
        <img
          src="/Cece_Praying.jpeg"
          alt="Rezando el rosario"
          style={{ flex: '1 1 0', width: '0', maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
        />
      </div>

      <h1 style={{textAlign:"center"}}>Como Rezar el Rosario</h1>
      <h3 style={{textAlign:"center"}}>Inicio:</h3>
      <p style={{textAlign:"center"}}>
        Por la senal de la Santa Cruz<br/>
        De nuestros enemigos libranos Senor<br/>
        En el nombre del Padre, Hijo, y Espiritu Santo<br/>
        Amen.
      </p>
      <h5 style={{textAlign:"center"}}>Rezar Credo:</h5>
      <p style={{textAlign:"center"}}>
        Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. 
        Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, 
        nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, 
        descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado 
        a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, 
        la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, 
        la resurrección de la carne y la vida eterna. Amén.
      </p>
      <h5 style={{textAlign:"center"}}>Un Padre Nuestro:</h5>
      <p style={{textAlign:"center"}}>
        <PadreNuestro/>
      </p>
      <h5 style={{textAlign:"center"}}>Tres Ave Marias:</h5>
      <p style={{textAlign:"center"}}>
        <AveMaria/>
      </p>
      <h5 style={{textAlign:"center"}}>Gloria:</h5>
      <p style={{textAlign:"center"}}>
        <Gloria/>
      </p>
      <hr/>

      <Stepper
        initialStep={1}
        backButtonText="Anterior"
        nextButtonText="Siguiente"
        stepCircleContainerClassName="rosario-stepper-shell"
        contentClassName="rosario-stepper-content"
        footerClassName="rosario-stepper-footer"
      >
        <Step>
          <h4>Primer Misterio:</h4>
          <Misterio num={1} />
        </Step>
        <Step>
          <h4>Segundo Misterio:</h4>
          <Misterio num={2} />
        </Step>
        <Step>
          <h4>Tercer Misterio:</h4>
          <Misterio num={3} />
        </Step>
        <Step>
          <h4>Cuarto Misterio:</h4>
          <Misterio num={4} />
        </Step>
        <Step>
          <h4>Quinto Misterio:</h4>
          <Misterio num={5} />
        </Step>
      </Stepper>
      
      <hr/>
      <h3 style={{textAlign:"center"}}>Final:</h3>
      <h5 style={{textAlign:"center"}}>Salve</h5>
      <p style={{textAlign:"center"}}>
        Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; 
        Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos, 
        gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, 
        vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro 
        muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, 
        oh piadosa, oh dulce siempre Virgen María!
        Ruega por nosotros, Santa Madre de Dios, 
        para que seamos dignos de alcanzar las promesas de 
        Nuestro Señor Jesucristo.
        Amen.
      </p>
      <br/>

    </Body>
  );
}