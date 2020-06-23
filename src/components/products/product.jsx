import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductComponent = () => {
    return (
        <div className='products'>
            <Container style={{width:'50%', backgroundColor: 'white', minHeight:'50vh', padding: '20px'}}>
                <Row>
                    <Col ><img src="/logo192.png" alt="" srcset="" style={{width: '100%'}}/></Col>
                    <Col lg={7}>
                    <h3>Ginonee Phone</h3>
                    <div>jkhjdsfjkdjkdfjjjsdfkkdsakjd kjfkdjalkjdjksjhfgdfn ghgeuygjhdgdsgvdsh kjfkdjalkjdjksjhfgdfn ghgeuygjhdgdsgvdsh</div>
                    <p>price: #5000</p>
                    <button>Add to cart</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductComponent;
