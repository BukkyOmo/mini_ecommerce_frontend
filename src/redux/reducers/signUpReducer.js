import * as types from '../actionTypes/signUp';

const signUpReducer = (state = [], action) => {
    switch (action.type) {
        case types.SIGNUP_USER:
            return [...state, { ...action.user }];
        default:
            return state;
    }
};

export default signUpReducer;
