import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../redux/actions/logInAction';
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
        this.props.loginUser(this.state);
    }

    render() {
        const { email, password } = this.state;

        return (
            <form className='form'>
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
                        <input type='button' className ='btn form-btn' value='Sign In' onClick={this.submitForm} />
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

const mapStateToProps = state => ({
    login: state.logIn
});

const mapDispatchToProps = {
    loginUser: loginActions.logInUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
