import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './images/71QRxZvKnGL._SX3000_.jpg';
import './index.css';


const CardStyle = {
    width: '18rem',
    textAlign: 'center'
}

function ProductCard() {
    return (
        <Card style={CardStyle}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className='btn-add-view'>
                    <Button variant="primary w-25">View</Button>
                    <Button variant="primary w-25">Add</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;