import * as types from '../actionTypes/signUp';
import axios from '../../config/axiosConfig';

export const signUpUser = () => {
	return { type: types.SIGNUP_USER };
};

export const signUpSuccess = (payload) => {
    return { type: types.SIGNUP_USER_SUCCESS, payload }
};

export const signUpFailure = (payload) => {
    return { type: types.SIGNUP_USER_FAILURE, payload }
};

// action creators
export const handleSignUp = (user) => async (dispatch) => {
    try {
        dispatch(signUpUser());
        const response = await axios.post('/auth/signup', user)
        console.log(response);
        const data = response.data.token;
        localStorage.setItem('token', data);
        dispatch(signUpSuccess(data));
    } catch (error) {
        dispatch(signUpFailure(error));
    }
}