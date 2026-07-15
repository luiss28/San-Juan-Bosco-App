import { useState } from "react";
import Body from '../components/Body';
import Card from 'react-bootstrap/Card';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import PadreNuestro from './PadreNuestro';
import AveMaria from './AveMaria';
import Gloria from './Gloria';

export default function Misterio({num}) {
    const [activeTab, setActiveTab] = useState("Gozosos");

    const titles = {
        Gozosos: "Gozosos",
        Dolorosos: "Dolorosos",
        Gloriosos: "Gloriosos",
        Luminosos: "Luminosos"
    };

    const misterios = {
        Gozosos: {
            1: `1. La anunciacion\n
                «Al sexto mes el angel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen 
                desposada con un hombre llamado Jose, de la estirpe de David, el nombre de la virgen era Maria.» 
                (Lc 1, 26-27)`,
            2: `2. La visitacion de Nuestra Senora a Santa Isabel\n
                «En aquellos días María se puso en camino y fue aprisa a la región montañosa, a una ciudad de Judá; entró en 
                casa de Zacarías y saludó a Isabel. Y sucedió que, en cuanto Isabel oyó el saludo de María, saltó de gozo el 
                niño en su seno, e Isabel quedó llena de Espíritu Santo; y exclamando a voz en grito, dijo: "Bendita tú entre 
                las mujeres y bendito el fruto de tu seno"» 
                (Lc 1, 39-42)`,
            3: `3. El nacimiento del Hijo de Dios\n
                «Sucedió que por aquellos días salió un edicto de César Augusto ordenando que se empadronase todo el mundo. 
                Este primer empadronamiento tuvo lugar siendo Cirino gobernador de Siria. Iban todos a empadronarse, cada uno 
                a su ciudad. Subió también José desde Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que 
                se llama Belén, por ser él de la casa y familia de David, para empadronarse con María, su esposa, que estaba 
                encinta. Y sucedió que, mientras ellos estaban allí, se le cumplieron los días del alumbramiento, y dio a luz
                a su hijo primogénito, le envolvió en pañales y le acostó en un pesebre, porque no tenían sitio en el alojamiento» 
                (Lc 2,1-7)`,
            4: `4. La presentacion del Senor Jesus en el templo\n
                «Cuando se cumplieron los ocho días para circuncidarle, se le dio el nombre de Jesús, como lo había llamado el 
                ángel antes de ser concebido en el seno. Cuando se cumplieron los días de la purificación de ellos, según la Ley
                de Moisés, llevaron a Jesús a Jerusalén para presentarle al Señor, como está escrito en la Ley del Señor: Todo 
                varón primogénito será consagrado al Señor y para ofrecer en sacrificio un par de tórtolas o dos pichones, 
                conforme a lo que se dice en la Ley del Señor» 
                (Lc 2, 21-24)`,
            5: `5. Jesus es hallado en el templo\n
                «Sus padres iban todos los años a Jerusalén a la fiesta de la Pascua. Cuando tuvo doce años, subieron ellos 
                como de costumbre a la fiesta y, al volverse, pasados los días, el niño Jesús se quedó en Jerusalén, sin saberlo 
                sus padres... 
                Y sucedió que al cabo de tres días, le encontraron en el Templo sentado en medio de los maestros, escuchándoles 
                y preguntándoles; todos los que le oían, estaban estupefactos por su inteligencia y sus respuestas» 
                (Lc 2, 41-47)`
        },
        Dolorosos: {
            1: `1. La oracion de Jesus en el huerto\n
                «Entonces Jesús fue con ellos a un huerto, llamado Getsemaní, y dijo a sus discípulos: "Sentaos aquí mientras
                voy a orar". Y tomando consigo a Pedro y a los dos hijos de Zebedeo, comenzó a sentir tristeza y angustia.
                Entonces les dijo: "Mi alma está triste hasta el punto de morir; quedaos aquí y velad conmigo". Y adelantándose
                un poco, cayó rostro en tierra, y suplicaba así: "Padre mío, si es posible, que pase de mí esta copa, pero no sea
                como yo quiero, sino como quieras tú"»
                (Mt 26, 36-39)`,
            2: `2. La flagelacion del Senor\n
                «Pilato puso en libertad a Barrabás; y a Jesús, después de haberlo hecho azotar, lo entregó para que fuera crucificado» 
                (Mt 27, 26)`,
            3: `3. La coronacion de espinas\n
                «Entonces los soldados del procurador llevaron consigo a Jesús al pretorio y reunieron alrededor de él a toda la cohorte.
                Lo desnudaron y le echaron encima un manto de púrpura y, trenzando una corona de espinas, se la pusieron sobre la cabeza,
                y en su mano derecha una caña, y doblando la rodilla delante de él, le hacían burla diciendo: "Salve, Rey de los judíos"».
                (Mt 27, 27-29)`,
            4: `4. El camino del Monte Calvario\n
                «Y obligaron a uno que pasaba, a Simón de Cirene, que volvía del campo, el padre de Alejandro y de Rufo, a que
                llevara su cruz. Lo condujeron al lugar del Gólgota, que quiere decir de la "Calavera"»
                (Mc 15, 21-22)`,
            5: `5. La crucifixion y muerte de Jesus\n
                «Llegados al lugar llamado "La Calavera", le crucificaron allí a él y a los dos malhechores, uno a la derecha y otro a
                la izquierda. Jesús decía: "Padre, perdónales, porque no saben lo que hacen"... Era ya eso de mediodía cuando, al 
                eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la media tarde. El velo del Santuario se rasgó por 
                medio y Jesús, dando un fuerte grito dijo: "Padre, en tus manos pongo mi espíritu" y, dicho esto, expiró» 
                (Lc  23, 33-46)`
        },
        Gloriosos: {
            1: `1. La resurreccion de Jesus\n
                «El primer día de la semana, muy de mañana, fueron al sepulcro llevando los aromas que habían preparado. 
                Pero encontraron que la piedra había sido retirada del sepulcro, y entraron, pero no hallaron el cuerpo 
                del Señor Jesús. No sabían qué pensar de esto, cuando se presentaron ante ellas dos hombres con vestidos 
                resplandecientes. Ellas, despavoridas, miraban al suelo, y ellos les dijeron: "¿Por qué buscáis entre los 
                muertos al que está vivo? No está aquí, ha resucitado"» 
                (Lc 24, 1-6)`,
            2: `2. La asencion del Senor\n
                «El Señor Jesús, después de hablarles, ascendió al cielo y se sentó a la derecha de Dios» 
                (Mc 16, 19)`,
            3: `3. La venida del Espiritu Santo\n
                «Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar. De repente vino del cielo 
                un ruido como el de una ráfaga de viento impetuoso, que llenó toda la casa en la que se encontraban. 
                Se les aparecieron unas lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos; 
                quedaron todos llenos del Espíritu Santo y se pusieron a hablar en otras lenguas, según el Espíritu 
                les concedía expresarse» 
                (Hch 2, 1-4)`,
            4: `4. La asuncion de Nuestra Senora a los Cielos\n
                «Todas las generaciones me llamarán bienaventurada porque el Señor ha hecho obras grandes en mí» 
                (Lc 1, 48-49)`,
            5: `5. La coronacion de la Santisima Virgen\n
                «Una gran señal apareció en el cielo: una mujer, vestida de sol, con la luna bajo sus pies, y una 
                corona de doce estrellas sobre su cabeza» 
                (Ap 12, 1)`
        },
        Luminosos: {
            1: `1. El Bautismo en el Jordan\n
                «Bautizado Jesús, salió luego del agua; y en esto se abrieron los cielos y vio al Espíritu de 
                Dios que bajaba en forma de paloma y venía sobre él. Y una voz que salía de los cielos decía: 
                "Este es mi Hijo amado, en quien me complazco"». 
                (Mt 3,16-17)`,
            2: `2. La autorrevelacion en las bodas de Cana\n
                «Tres días después se celebraba una boda en Caná de Galilea y estaba allí la madre de Jesús. 
                Fue invitado también a la boda Jesús con sus discípulos. Y, como faltara vino, porque se había 
                acabado el vino de la boda, le dice a Jesús su madre: "No tienen vino". Jesús le responde: 
                "¿Qué tengo yo contigo, mujer? Todavía no ha llegado mi hora". Dice su madre a los sirvientes: 
                "Haced lo que él os diga"». 
                (Jn 2, 1-5)`,
            3: `3. El anauncio del Reino de Dios\n
                "El tiempo se ha cumplido y el Reino de Dios está cerca; convertíos y creed en el Evangelio". 
                (Mc 1, 15)`,
            4: `4. La transfiguracion\n
                «Seis días después, Jesús tomó consigo a Pedro, a Santiago y a su hermano Juan, y los llevó 
                aparte, a un monte alto. Y se transfiguró delante de ellos: su rostro se puso brillante como 
                el sol y sus vestidos se volvieron blancos como la luz» 
                (Mt 17, 1-2)`,
            5: `5. La eucaristia\n
                «Mientras estaban comiendo, tomó Jesús pan y lo bendijo, lo partió y, dándoselo a sus discípulos, 
                dijo: "Tomad, comed, éste es mi cuerpo"» 
                (Mt 26, 26)`
        }
    }

    return(
        <Body>
            <Card>
                <Card.Header>
                    <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                        <Tab eventKey="Gozosos" title="Lunes/Sabado"/>
                        <Tab eventKey="Dolorosos" title="Martes/Viernes"/>
                        <Tab eventKey="Gloriosos" title="Miercoles/Domingo"/>
                        <Tab eventKey="Luminosos" title="Jueves"/>
                    </Tabs>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {titles[activeTab]}
                    </Card.Title>
                    <div style={{ whiteSpace: 'pre-line' }}>
                        {misterios[activeTab][num]}
                    </div>
                </Card.Body>
            </Card>
            <br/>

            <b>1 Padre Nuestro</b>
            <PadreNuestro/>
            <br/>
            <b>10 Ave Marias</b>
            <AveMaria/>
            <br/>
            <b>Gloria</b>
            <Gloria/>
            <br/>
            <b>Maria es madre de gracia</b>
            <div style={{ marginLeft: '24px' }}>
                <p>
                    Maria es madre de gracia, madre de misericordia.
                    En la vida y en la muerta amparanos gran señora.
                    No te olvides de nosotros en aquella ultima hora 
                    virgen santisima.
                </p>
            </div>
            <b>Oh Jesus mio</b>
            <div style={{ marginLeft: '24px' }}>
                <p>
                    Oh, Jesús mío, perdona nuestros pecados, 
                    líbranos del fuego del infierno, lleva al cielo a todas las almas 
                    y socorre espelcialmente a las más necesitadas de tu 
                    Divina Misericordia. 
                    Amén.
                </p>
            </div>
            <p>
                Maria concebida sin pecado, 
                <b> ruega por nosotros que recurrimos a ti.</b>
            </p>
        </Body>
    )
}