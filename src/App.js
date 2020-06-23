import React, { Component } from 'react';
import Routes from './routes/index';
import { connect } from 'react-redux';
import { logInUserSuccess } from './redux/actions/logInAction';

class App extends Component {
	componentDidMount() {
		const token = localStorage.getItem('token');
		if (token) {
			this.props.logInUserSuccess(token);
		}
	}
	render() {
		return <Routes />;
	}
}

const mapDispatcheToProps = {
	logInUserSuccess
};

export default connect(null, mapDispatcheToProps)(App);
