import * as types from '../actionTypes/logIn';

export const logInUser = payload => {
    return { type: types.LOGIN_USER, payload }
};
