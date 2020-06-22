import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    initialState = {
        email: '',
        password: ''
    }
    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { email, password } = this.state;

        return (
            <form className='form'>
                <div className='form-item'>
                    {/* <label htmlFor='email'>Email</label> */}
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
                    {/* <label htmlFor='password'>Password</label> */}
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
                    <button id='login' className='btn form-btn' type='submit'>
                        Sign In
                    </button>
                </div>
                <div className='form-item'>
                    <p>
                        Don't have an account?<Link to='/signup'> Sign Up </Link>
                    </p>
                </div>
            </form>
        )
    }
}

export default LoginForm;
