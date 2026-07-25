import Body from '../components/Body';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function AboutUsPage() {
    return (
        <Body sidebar>
            <img
                src="/YG_Together.jpeg"
                alt="YouTube here"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block', margin: '0 auto 16px' }}
            />

            <h3>Conoce a los lideres</h3>

            <Row className="mb-2">
                <Col xs={6}>
                    <img
                        src="monsignor_pfp.jpeg"
                        alt="monsignor"
                        className="img-fluid"
                        style={{aspectRatio:"1 / 1", objectFit: "cover", borderRadius: '12px'}}
                    />
                </Col>

                <Col xs={6}>
                    <img
                        src="cleber_pfp.jpeg"
                        alt="cleber"
                        className="img-fluid"
                        style={{aspectRatio:"1 / 1", objectFit: "cover", borderRadius: '12px'}}
                    />
                </Col>

            </Row>

            <Row sm={1} md={1} lg={3} className="g-2">
                <Col>
                    <Card>
                        <Card.Header>
                            <Row className='g-2'>
                                <Col>
                                    <Card.Img 
                                        src="/cece_pfp.png" 
                                        alt="cece"
                                        className='img-fluid w-100' 
                                        style={{aspectRatio:"1 / 1", objectFit: "cover"}} />
                                </Col>
                                <Col>
                                    <Card.Img 
                                        src="/cece_fun_pfp.jpeg"
                                        alt="cece" 
                                        className='img-fluid w-100'
                                        style={{aspectRatio:"1 / 1", objectFit: "cover"}} />
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Cecilia Sanchez</Card.Title>
                            <Card.Text>
                                <ul className="mb-0 ps-3">
                                    <li>Amo la fotografia</li>
                                    <li>Soy ministra de la comunion</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Header>
                            <Row className='g-2'>
                                <Col>
                                    <Card.Img 
                                        src="/brenda_pfp.jpeg" 
                                        alt="brenda"
                                        className='img-fluid w-100' 
                                        style={{aspectRatio:"1 / 1", objectFit: "cover"}} />
                                </Col>
                                <Col>
                                    <Card.Img 
                                        src="/brenda_fun_pfp.jpg" 
                                        alt="brenda"
                                        className='img-fluid w-100'
                                        style={{aspectRatio:"1 / 1", objectFit: "cover"}} />
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Brenda Lizardo</Card.Title>
                            <Card.Text>
                                <ul className="mb-0 ps-3">
                                    <li>Canto en el coro</li>
                                    <li>Estudiando psicologia en Assumption</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Header>
                            <Row className='g-2'>
                                <Col>
                                    <Card.Img 
                                        src="/luis_pfp.jpeg" 
                                        alt="luis"
                                        className='img-fluid w-100' 
                                        style={{aspectRatio:"1 / 1", objectFit: "cover"}} />
                                </Col>
                                <Col>
                                    <Card.Img 
                                        src="/luis_fun_pfp.jpeg" 
                                        alt="luis"
                                        className='img-fluid w-100'
                                        style={{aspectRatio:"1 / 1", objectFit: "cover"}} />
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Luis Sanchez</Card.Title>
                            <Card.Text>
                                <ul className="mb-0 ps-3">
                                    <li>Amo el futbol</li>
                                    <li>Toco el piano</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>

        </Body>
    )
}