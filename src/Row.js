// Importing Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';
// Importing Cards
import ProductCard from './Card';
// Importing CSS
import './index.css';
// Importing Image Using URL
import img1 from './images/p1.jpg';
import img2 from './images/p2.jpg';
import img3 from './images/p3.jpg';

function RowLayout() {
    return (
        <Container className='pt-5 px-5'>
            <Row className='respo-col'>
                <Col xl={4} md={12} sm={12} className='p-2 one-card'>
                    <ProductCard image={img1} title='Lorem ipsum dolor sit amet.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, elit ut finibus auctor, sapien tortor vulputate mauris, eu mollis orci sem ut arcu. Fusce ac dolor neque.' />
                </Col>
                <Col xl={4} md={12} sm={12} className='p-2 one-card'>
                    <ProductCard image={img2} title='Lorem ipsum dolor sit amet.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, elit ut finibus auctor, sapien tortor vulputate mauris, eu mollis orci sem ut arcu. Fusce ac dolor neque.' />
                </Col>
                <Col xl={4} md={12} sm={12} className='p-2 one-card'>
                    <ProductCard image={img3} title='Lorem ipsum dolor sit amet.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, elit ut finibus auctor, sapien tortor vulputate mauris, eu mollis orci sem ut arcu. Fusce ac dolor neque.' />
                </Col>
            </Row>
        </Container>
    );
}


function RowLayout2() {
    return (
        <Container className='pt-5 px-5'>
            <Row className='respo-col'>
                <Col xl={4} md={12} sm={12} className='p-2 one-card'>
                    <ProductCard image={img3} title='Lorem ipsum dolor sit amet.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, elit ut finibus auctor, sapien tortor vulputate mauris, eu mollis orci sem ut arcu. Fusce ac dolor neque.' />
                </Col>
                <Col xl={4} md={12} sm={12} className='p-2 one-card'>
                    <ProductCard image={img1} title='Lorem ipsum dolor sit amet.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, elit ut finibus auctor, sapien tortor vulputate mauris, eu mollis orci sem ut arcu. Fusce ac dolor neque.' />
                </Col>
                <Col xl={4} md={12} sm={12} className='p-2 one-card'>
                    <ProductCard image={img2} title='Lorem ipsum dolor sit amet.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, elit ut finibus auctor, sapien tortor vulputate mauris, eu mollis orci sem ut arcu. Fusce ac dolor neque.' />
                </Col>
            </Row>
        </Container>
    );
}

export { RowLayout, RowLayout2 };