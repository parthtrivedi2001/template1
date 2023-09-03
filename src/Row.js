import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './Card';
import './index.css';

function RowLayout() {
    return (
        <Container className='pt-5 px-5'>
            <Row className='respo-col'>
                <Col className='p-2'>
                    <ProductCard />
                </Col>
                <Col className='p-2'>
                    <ProductCard />
                </Col>
                <Col className='p-2'>
                    <ProductCard />
                </Col>
            </Row>
        </Container>
    );
}


function RowLayout2() {
    return (
        <Container className='pt-5 px-5'>
            <Row className='respo-col'>
                <Col className='p-2'>
                    <ProductCard />
                </Col>
                <Col className='p-2'>
                    <ProductCard />
                </Col>
                <Col className='p-2'>
                    <ProductCard />
                </Col>
            </Row>
        </Container>
    );
}


export { RowLayout, RowLayout2 };