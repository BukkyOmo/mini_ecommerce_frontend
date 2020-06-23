import * as types from '../actionTypes/logIn';
import axios from '../../config/axiosConfig';

// actions
export const logInUser = () => {
	return {
		type: types.LOGIN_USER
	};
};

export const logInUserSuccess = (payload) => {
	return {
		type: types.LOGIN_USER_SUCCESS,
		payload
	};
};

export const logInUserFailure = (payload) => {
	return {
		type: types.LOGIN_USER_FAILURE,
		payload
	};
};

// action creators
export const HandlelogInUser = (user) => async (dispatch) => {
	try {
		dispatch(logInUser());
		const response = await axios.post('/auth/signin', user);
		const data = response.data.token;
		localStorage.setItem('token', data);
		dispatch(logInUserSuccess(data));
	} catch (error) {
		dispatch(logInUserFailure(error));
	}
};
