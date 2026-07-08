import Body from "../components/Body";

export default function DonBoscoPage() {
    return (
        <Body sidebar>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'stretch' }}>
                <img
                    src="/SJB_w_children.jpg"
                    alt="Dia de Don Bosco"
                    style={{ flex: '1 1 0', width: '0', maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
                />
                <img
                    src="/YG_SJB.jpeg"
                    alt="Dia de Don Bosco"
                    style={{ flex: '1 1 0', width: '0', maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
                />
            </div>
            
            <h3 style={{textAlign:"left"}}>Resumen Rapido:</h3>
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '24px' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '5', textAlign: 'left', columnCount: 2, columnGap: '64px', paddingBottom: '20px' }}>
                    <li>Fecha de nacimiento: Agosto 16, 1815</li>
                    <li>Lugar de nacimiento: Italia</li>
                    <li>Fecha de muerte: Enero 31, 1888</li>
                    <li>Canonizado: Abril 1, 1934</li>
                    <li>Padre de los jovenes</li>
                    <li>Fundador de los Salesianos</li>
                </ul>
            </div>

            <h3 style={{textAlign:"left", marginBottom: '16px'}}>Biografia:</h3>
            <p style={{ marginBottom: '16px' }}>
                Nacido en un pequeño pueblo italiano, Don Bosco siempre sintio desde joven un llamado
                a ser instrumento de Dios. El tenía un gran amor y apreció a los pobres y a los jovenes.
                Comenzo a tener sueños y visiones supernaturales, y dedicó su vida a la educación y el 
                bienestar de los jovenes.
            </p>
            <p style={{ marginBottom: '16px' }}>
                Cuando tenia dos años, murió el padre de Don Bosco, dejando a su madre con tres hijos.
                A los nueve años, Don Bosco tuvó su primer de muchos sueños. En el sueño, el vio una 
                multitud de jovenes jugando y diciendo palabras vulgares. El joven Don Bosco salto en
                medio de ellos y comenzo a agitar la multidud. Alli llego un hombre y le informo que 
                para ganarse esa multidud, el tendra que ser gentil y suave, no fuerte y feroz. Al 
                final, una mujer le instruyo que el tendra que pastorear y enseñar.
            </p>
            <p style={{ marginBottom: '16px' }}>
                A los diez años, Don Bosco comenzo a estudiar magos y trucos. El hacía muestras de
                trucos, pero siempre incluía una oración antes y despues. Eso le ayudo a los jovenes
                aprender como orar.
            </p>
            <p style={{ marginBottom: '16px' }}>
                Don Bosco venía de un a familia muy pobre. El trataba de encontrar trabajo por todos
                lados. Mientras buscaba trabajo, un padre noto el talento de Don Bosco, y le ayudo
                a comenzar sus estudios. A los vientiseis años, Don Bosco fue ordenado padre.
            </p>
            <p style={{ marginBottom: '16px' }}>
                De inmediato su trabajo comenzo. Don Bosco ofrecía posada a los que necesitaban.
                Aunque le robaban las camas, colchas, y comida, Don Bosco no se daba por vencido.
                Lentamente más y más jovenes se quedaban con Don Bosco, y asi fue creciendo su
                ayuda. Algunos jovenes querían ayudarle a Don Bosco, por en cuanto fueron 
                fundados los salesianos. Allí, Don Bosco y sus ayudantes se enfocaban en ayudar a
                jovenes sin casa, y al mismo tiempo les enseñaban instrucciónes espirituales.
            </p>
            <p style={{ marginBottom: '16px' }}>
                Poco a poco los salesianos continuaban creciendo. Con ellos, crecía el amor
                hacía la juventud. Don Bosco nos enseño a todos que es importante disfrutar la
                juventud. Tambien, es importante mantenernos honestos hacía la gracia de Dios.
                Don Bosco siempre demostro que para enseñar a los jovenes, es importante ponerse
                en los zapatos de ellos. Jugar con ellos, reir con ellos, celebrar con ellos, y
                así sera salvada la juventud de muchos.
            </p>

        </Body>
    )
}