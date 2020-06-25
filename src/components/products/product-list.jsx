import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as getProductsActions from '../../redux/actions/getProductsActions';
import './product-list-module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    componentDidMount(){
        this.props.getProducts();
    }
    render() {
        const { Products } = this.props;

        return (
            <div className='products'>
                {Products.map(product => (
                    <Card style={{ width: '18rem', marginTop: '50px' }} key={product._id}>
                    <Card.Img variant="top" src={product.image_url} style={{height: '280px', width: '100%'}} />
                    <hr/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            Price: #{product.price}
                            </Card.Text>
                        <Button variant="primary"><Link to={`/products/${product._id}`}>Buy</Link></Button>
                    </Card.Body>
                </Card>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Products: state.getProducts.products
});

const mapDispatchToProps = {
    getProducts: getProductsActions.handleGetAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
