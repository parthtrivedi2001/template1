import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeadImg1 from './images/71QRxZvKnGL._SX3000_.jpg';
import HeadImg2 from './images/81KkrQWEHIL._SX3000_.jpg';
import HeadImg3 from './images/61lwJy4B8PL._SX3000_.jpg';
import Carousel from 'react-bootstrap/Carousel';

export default function ImageHead() {
    return (
        <Container>
            <Row>
                <Col className='p-3 bg-property'>
                    <Row>
                        <Col className='text-center in-content'>
                            <p>Flat $400 OFF</p>
                        </Col>
                        <div class="vr m-0 p-0"></div>
                        <Col className='text-center in-content fs-2'>
                            On Your 1st Purchase Via Products
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='p-2'>
                    <Carousel>
                        <Carousel.Item className='slide-height'>
                            <img alt='slider' src={HeadImg1}/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='slide-height'>
                            <img alt='slider' src={HeadImg2}/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='slide-height'>
                            <img alt='slider' src={HeadImg3}/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}