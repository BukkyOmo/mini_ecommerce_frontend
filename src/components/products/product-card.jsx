import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductCard = () => {
    return (
        <div className='products'>
            <Card style={{ width: '18rem', marginTop: '50px' }}>
                <Card.Img variant="top" src="/logo192.png" />
                <hr/>
                <Card.Body>
                    <Card.Title>ACV Blender</Card.Title>
                    <Card.Text>
                        Price: #5000
                     </Card.Text>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard;
