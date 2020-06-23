import * as types from '../actionTypes/signUp';

const initialState = {
    pending: false,
    error: null,
    data: null,
    loggedIn: false
}

const signUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SIGNUP_USER:
            return { ...state, pending: true, error: null };
        case types.SIGNUP_USER_SUCCESS:
            return { ...state, pending: false, data: action.payload, loggedIn: true };
        case types.SIGNUP_USER_FAILURE:
            return { ...state, pending: false, error: action.payload };
		default:
			return state;
	}
};

export default signUpReducer;
