import * as types from '../actionTypes/logIn';

const initialState = {
	pending: false,
	error: null,
	data: null,
	loggedIn: false
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_USER:
			return { ...state, pending: true, error: null };
		case types.LOGIN_USER_SUCCESS:
			return { ...state, pending: false, data: action.payload, loggedIn: true };
		case types.LOGIN_USER_FAILURE:
			return { ...state, pending: false, error: action.payload };
		default:
			return state;
	}
};

export default loginReducer;
