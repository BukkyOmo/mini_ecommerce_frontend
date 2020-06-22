import * as types from '../actionTypes/logIn';

const loginReducer = (state = [], action) => {
    switch (action.type) {
        case types.LOGIN_USER:
            return [...state, { ...action.payload }];
        default:
            return state;
    }
}

export default loginReducer;
