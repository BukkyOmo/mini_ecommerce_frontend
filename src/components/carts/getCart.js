import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../redux/actions/cartActions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class GetCart extends Component {
    componentDidMount(){
        this.props.ProductsInCart();
    };

    handleRemoveCartItem = (id) => {
        this.props.removeItemFromCart(id);
    };
    
    render() {
        const { Products } = this.props;

        return (
            <div>
                <Button style={{margin: '20px auto 0 160px', width: '200px'}}><Link to='/products'>Continue Shopping</Link></Button>
                <div className='products'>
                    {Products.map(product => (
                        <Container style={{width:'80%', backgroundColor: 'white', padding: '20px', marginTop: '10px'}} key={product._id}>
                            <Row>
                                <Col ><img src={product.product.image_url} alt="product" style={{width: '80px', height: '80px'}}/></Col>
                                <Col lg={7}>
                                    <div>{product.product.name}</div>
                                    <button onClick={() => this.handleRemoveCartItem(product.product._id)}>Remove from cart</button>
                                </Col>
                                <Col ><p>{product.quantity}</p></Col>
                                <Col lg={2}>
                                <div>#{product.product.price * product.quantity}</div>
                                <span style={{color: 'grey', fontSize: '12px'}}>#{product.product.price} X {product.quantity} items</span>
                                </Col>
                            </Row>
                        </Container>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Products: state.getCart,
    RemoveFromCart: state.removeCartItem
});

const mapDispatchToProps = {
    ProductsInCart: cartActions.handleGetCartItems,
    removeItemFromCart: cartActions.handleRemoveItemFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCart);
