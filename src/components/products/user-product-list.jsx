import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as getOwnProductsActions from '../../redux/actions/getOwnProductsActions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './product-list-module.css';

class UserProductList extends Component {
    componentDidMount(){
        this.props.getProducts();
    };

    handleDeleteProduct = (id) => {
        this.props.deleteOwnProduct(id);
    };

    render(){
        const { Products } = this.props;

        return (
            <div className='products' style={{margin: '20px 200px'}}>
            {Products.map(product => (
            <Card style={{ width: '18rem', marginTop: '50px' }} key={product._id}>
                <Card.Img variant="top" src={product.image_url} style={{height: '220px', width: '100%'}} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Price: #{product.price}
                    </Card.Text>
                    <Button variant="dark" style={{width:'100px'}}>Edit</Button>
                    <Button variant="dark" style={{width:'100px'}} onClick={() => this.handleDeleteProduct(product._id)}>Delete</Button>
                </Card.Body>
            </Card>
            ))}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    Products: state.getOwnProducts,
    deleteProduct: state.deleteProduct
});

const mapDispatchToProps = {
    getProducts: getOwnProductsActions.handleGetOwnProducts,
    deleteOwnProduct: getOwnProductsActions.handleDeleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProductList);
