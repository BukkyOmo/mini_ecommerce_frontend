import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../redux/actions/productActions';
import uploadImage from '../../helpers/cloudinary';

class CreateProduct extends Component{
    initialState = {
        name: '',
        description: '',
        price: '',
        image_url: ''
    }
    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleUploadClick = async () => {
            const result = await uploadImage();
            let image_url = result.url;
            this.setState({
                image_url
            });
    };

    submitForm = () => {
        this.props.createProduct(this.state);
    };

    render() {
        const { name, description, price, image_url } = this.state;
        const { pending, error } = this.props;

        return (
            <form className='form create-product'>
                {error ? <span>{error.message}</span> : null}
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
                {image_url === '' ?  
                <div className='form-item'>
                    <div onClick={this.handleUploadClick} value={image_url} style={{width:'150px', textAlign: 'center', marginLeft: '20px', border: '1px solid grey', borderRadius:'10px', cursor: 'pointer'}}>Upload Image</div>
                </div> : <div className='form-item' style={{color:'#000', width: '180px', margin: '0 auto 20px', textAlign: 'center'}}>Upload successful</div>}
                <div className='form-item'>
                    <input type='button' className='btn form-btn' value={pending ? 'Submitting...' : 'Save Product'} onClick={this.submitForm} />
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createProduct: productActions.handleCreateProduct
}

const mapStateToProps = state => ({
    pending: state.createProduct.pending,
    error: state.createProduct.error
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
