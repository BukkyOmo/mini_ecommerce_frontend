import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../redux/actions/productActions';

class CreateProduct extends Component{
    initialState = {
        name: '',
        description: '',
        price: '',
        image: ''
    }
    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.createProduct(this.state);
    }


    render() {
        const { name, description, price, image } = this.state;

        return (
            <form className='form create-product'>
                <div className='form-item'>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={this.handleChange}
                        placeholder='name'
                    />
                </div>
                <div className='form-item'>
                    <textarea
                        type='textarea'
                        name='description'
                        id='description'
                        value={description}
                        onChange={this.handleChange}
                        placeholder='description'
                        rows="3"
                        cols="72"
                    />
                </div>
                <div className='form-item'>
                    <input
                        type='text'
                        name='price'
                        id='price'
                        value={price}
                        onChange={this.handleChange}
                        placeholder='price'
                    />
                </div>
                <div className='form-item'>
                    <input
                        type='file'
                        name='image'
                        id='image'
                        value={image}
                        onChange={this.handleChange}
                        placeholder='image'
                    />
                </div>
                <div className='form-item'>
                    <input type='button' className='btn form-btn' value='Save' onClick={this.submitForm} />
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createProduct: productActions.createProduct
}

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
