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
            1: "1. La anunciacion",
            2: "2. La visitacion de Nuestra Senora a Santa Isabel",
            3: "3. El nacimiento del Hijo de Dios",
            4: "4. La presentacion del Senor Jesus en el templo",
            5: "5. Jesus es hallado en el templo"
        },
        Dolorosos: {
            1: "1. La oracion de Jesus en el huerto",
            2: "2. La flagelacion del Senor",
            3: "3. La coronacion de espinas",
            4: "4. El camino del Monte Calvario",
            5: "5. La crucifixion y muerte de Jesus"
        },
        Gloriosos: {
            1: "1. La resurreccion de Jesus",
            2: "2. La asencion del Senor",
            3: "3. La venida del Espiritu Santo",
            4: "4. La asuncion de Nuestra Senora a los Cielos",
            5: "5. La coronacion de la Santisima Virgen"
        },
        Luminosos: {
            1: "1. El Bautismo en el Jordan",
            2: "2. La autorrevelacion en las bodas de Cana",
            3: "3. El anauncio del Reino de Dios",
            4: "4. La transfiguracion",
            5: "5. La eucaristia"
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
                    <p>
                        {misterios[activeTab][num]}
                    </p>
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