import Body from '../components/Body';
import Suplica from '../components/Suplicas';
import PadreNuestro from '../components/PadreNuestro';
import AveMaria from '../components/AveMaria';
import Gloria from '../components/Gloria';

export default function RosarioJuvenilPage() {

    return (
        <Body sidebar>
            <h1 style={{textAlign:"center"}}>Como Rezar el Rosario Juvenil</h1>
            <h3 style={{textAlign:"center"}}>Inicio:</h3>
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
            <h5 style={{textAlign:"center"}}>Un Padre Nuestro</h5>
            <p style={{textAlign:"center"}}>
                <PadreNuestro/>
            </p>
            <h5 style={{textAlign:"center"}}>Tres Ave Marias</h5>
            <p style={{textAlign:"center"}}>
                <AveMaria/>
            </p>
            <h5 style={{textAlign:"center"}}>Gloria</h5>
            <p style={{textAlign:"center"}}>
                <Gloria/>
            </p>
            <hr/>

            <h3>Primera Suplica:</h3>
            <Suplica/>
            <br/>
            <h3>Segunda Suplica:</h3>
            <Suplica/>
            <br/>
            <h3>Tercera Suplica:</h3>
            <Suplica/>
            <br/>
            <h3>Cuarta Suplica:</h3>
            <Suplica/>
            <br/>
            <h3>Quinta Suplica:</h3>
            <Suplica/>
            <br/>
        </Body>
    );
}