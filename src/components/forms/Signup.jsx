import React, { Component } from 'react';
import './form-module.css';

class SignUpForm extends Component {
    initialState = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }
    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstname, lastname, email, password } = this.state;

        return (
            <form className='form'>
                <div className='form-item'>
                    <input
                        type='text'
                        name='firstname'
                        id='firstname'
                        value={firstname}
                        onChange={this.handleChange}
                        placeholder='firstname'
                    />
                </div>
                <div className='form-item'>
                    <input
                        type='text'
                        name='lastname'
                        id='lastname'
                        value={lastname}
                        onChange={this.handleChange}
                        placeholder='lastname'
                    />
                </div>
                <div className='form-item'>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        value={email}
                        onChange={this.handleChange}
                        placeholder='email'
                    />
                </div>
                <div className='form-item'>
                    <input
                        type='text'
                        name='password'
                        id='password'
                        value={password}
                        onChange={this.handleChange}
                        placeholder='password'
                    />
                </div>
                <div className='form-item'>
                    <input type='button' className ='btn form-btn' value='Submit' onClick={this.submitForm} />
                </div>
            </form>
        )
    }
}

export default SignUpForm;
