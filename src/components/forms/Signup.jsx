import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as SignUpActions from '../../redux/actions/signUpActions';
import { Redirect } from 'react-router-dom';
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
        this.props.signUpUser(this.state);
    }

    render() {
        const { firstname, lastname, email, password } = this.state;
        const { loggedIn, pending, error } = this.props;

        return loggedIn ? <Redirect to={'/products'} /> : (
            <form className='form'>
                {error ? <span>{error.message}</span> : null}
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
                    <input type='button' className ='btn form-btn' value={ pending ? 'Submitting...' : 'Sign Up' } onClick={this.submitForm} />
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    pending: state.signUp.pending,
    error: state.signUp.error,
    loggedIn: state.signUp.loggedIn
});

const mapDispatchToProps = {
    signUpUser: SignUpActions.handleSignUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
