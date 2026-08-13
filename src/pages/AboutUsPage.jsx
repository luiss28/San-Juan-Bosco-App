import Body from '../components/Body';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function AboutUsPage() {
    return (
        <Body sidebar>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                    marginBottom: "16px",
                }}
            >
                <iframe
                    src="https://www.youtube.com/embed/s3oypjUywhE?si=8b-3Oo86mdb5sCAx"
                    title="Youth Group Video"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                        borderRadius: "12px",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

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