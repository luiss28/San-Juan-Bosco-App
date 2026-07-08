import Body from '../components/Body';
import Suplica from '../components/Suplicas';
import PadreNuestro from '../components/PadreNuestro';
import AveMaria from '../components/AveMaria';
import Gloria from '../components/Gloria';

export default function RosarioJuvenilPage() {

    return (
        <Body sidebar>
            <img
                src="/MFS_Together.jpeg"
                alt="Mision Haz Me Santo"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block', margin: '0 auto 16px' }}
            />
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
            <h6>
                Señor, Dios mio, Padre nuestro, creador del cielo y de la tierra, en 
                esta primera suplica vengo a pedirte
                que tu plan de amor se cumpla en mi juventud y en mi familia, asi como
                se cumplio en la vida de la Virgen Maria, que aun siendo tan jovencita
                recibio del angel Gabriel el proyecto de salvacíon que es Jesucristo para
                su vida y para la vida de toda la humanidad. <br/>
                <p style={{ marginTop: '12px' }}>
                    <b>
                        Dios, salva mi juventud y mi familia, y dame la gracia de ser como la
                        Virgen Maria, atento y obediente a tu llamada.
                    </b>
                </p>
            </h6>
            <Suplica/>
            <br/>
            <h3>Segunda Suplica:</h3>
            <h6>
                Señor, Dios mio, Padre nuestro, creador del cielo y de la
                tierra, en esta segunda suplica, vengo a pedirte que tu plan
                de amor se cumpla en mi juventud y en mi familia, asi como
                se cumplió en la vida de la Virgen Maria que aun siendo tan
                jovencita, se despojo de si misma a pedido de Dios. Salio de
                casa embarazada para llevar el proyector de la salvacion que
                es Jesucristo, para la vida de Isabel y Juan Bautista. <br/>
                <p style={{ marginTop: '12px' }}>
                    <b>
                        Dios, salva mi juventud y mi familia, y dame la gracia de ser como la
                        Virgen Maria, y de tener la valentia de llevar tu proyecto de salvacion
                        a todos los jovenes.
                    </b>
                </p>
            </h6>
            <Suplica/>
            <br/>
            <h3>Tercera Suplica:</h3>
            <h6>
                Señor, Dios mio, Padre nuestro, creador del cielo y de la
                tierra, en esta tercera suplica, vengo a pedirte que tu plan
                de amor se cumpla en mi juventud y en mi familia, as icomo
                se cumplio en la vida de la Virgen Maria que aun siendo tan
                jovencita, en obediencia a Sios, permitio que nacieses de su
                vida el niño Jesus, Salvador de la humanidad.<br/>
                <p style={{ marginTop: '12px' }}>
                    <b>
                        Dios, salva mi juventud y mi familia, y dame la gracia de ser como la
                        Virgen Maria, y dejar al niño Jesus nacer en mi corazon todos los dias
                        de mi vida hasta el dia de su gloria.
                    </b>
                </p>
            </h6>
            <Suplica/>
            <br/>
            <h3>Cuarta Suplica:</h3>
            <h6>
                Señor, Dios mio, Padre nuestro, creador del cielo y de la
                tierra, en esta cuarta suplica, vengo a pedirte que tu plan de amor
                se cumpla en mi juventud y en mi familia, asi como se cumplio en la vida de la
                Virgen Maria que aun siendo tan jovencita, tuvo la decision de presentar a Jesus
                en el templo.<br/>
                <p style={{ marginTop: '12px' }}>
                    <b>
                        Dios, salva mi juventud y mi familia, y dame el valor de presentar a Jesus 
                        todos los dias a todos aquellos que pasaran por mi vida. Dios, enseñame 
                        a traves de tu misterio de amor, a tener la decision de la Virgen Maria,
                        que con mucho amor, presneto a Jesus en el templo para salvar mi vida
                        y la de toda la humanidad. Que yo, hoy, como joven de Cristo, por el corazon
                        de la Santisima Virgen, pueda presentar a Cristo como fuente de vida y salvacion
                        para toda la humanidad.
                    </b>
                </p>
            </h6>
            <Suplica/>
            <br/>
            <h3>Quinta Suplica:</h3>
            <h6>
                Señor, Dios mio, Padre nuestro, creador del cielo y de la
                tierra, en esta quinta suplica, vengo a pedirte que tu plan de amor se cumpla en mi juventud
                y en mi familia, asi como se cumplio en la vida de la Virgen Maria que aun siendo
                tan jovencita, se abrio a la gracia de engendrar al Verbo Encarnado. <br/>
                <p style={{ marginTop: '12px' }}>
                    <b>
                        Dios, salva mi juventud y mi familia, y dame la gracia de que pueda 
                        ser engendrado todos los dias de mi vida en el vientre de la Virgen Maria, tornandome asi uno
                        con ella, todo de ella.
                    </b>
                </p>
            </h6>
            <Suplica/>
            <hr/>
        </Body>
    );
}