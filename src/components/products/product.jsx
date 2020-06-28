import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as ProductActions from '../../redux/actions/getOneProductActions';
import * as CartActions from '../../redux/actions/cartActions';

class ProductComponent extends Component {
    componentDidMount(){
        const {
            match: {
                params: { id }
            }
        } = this.props
        this.props.getOneProduct(id)
    };

    submitCartItem = () => {
        const {
            match: {
                params: { id }
            }
        } = this.props
        this.props.addItemToCart(id);
    };

    render(){
        const { Product, error } = this.props;
        
        return error ? <Redirect to={'/'} /> : (
            <div className='products'>
                <Container style={{width:'50%', backgroundColor: 'white', minHeight:'50vh', padding: '20px'}}>
                    <Row>
                        <Col ><img src={Product.image_url} alt="product" style={{width: '100%', height: '330px'}}/></Col>
                        <Col lg={6}>
                        <h3>{Product.name}</h3>
                        <div>{Product.description}</div>
                        <p>price: #{Product.price}</p>
                        <button className='btn btn-no-margin-left' onClick={this.submitCartItem}><Link to={'/carts'}>Add to cart</Link></button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Product: state.getOneProduct.product,
    error: state.getOneProduct.error
});

const mapDispatchToProps = {
    getOneProduct: ProductActions.handleGetProduct,
    addItemToCart: CartActions.handleAddToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
