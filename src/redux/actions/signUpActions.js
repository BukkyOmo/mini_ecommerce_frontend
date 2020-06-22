import * as types from '../actionTypes/signUp';

export const signUp = user => {
    return { type: types.SIGNUP_USER, user }
};
