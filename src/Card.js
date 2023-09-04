// Importing Bootsrtap Components
import { Button, Card } from 'react-bootstrap';
// Importing CSS File
import './index.css';

// Using Required Custom CSS
const CardStyle = {
    width: '18rem',
    textAlign: 'center'
}

const CardImg = {
    objectFit: 'contain',
    maxWidth: '100%',
    height: '250px',
    margin: '20px 0',
    display: 'block'
}

// Using Function As Default
export default function ProductCard(props) {
    return (
        <Card style={CardStyle} className='product-card'>
            <Card.Img style={CardImg} variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <hr />
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <hr />
                <div className='btn-add-view'>
                    <Button variant="primary w-25">View</Button>
                    <Button variant="primary w-25">Add</Button>
                </div>
            </Card.Body>
        </Card>
    );
}