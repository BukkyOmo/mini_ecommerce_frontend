import * as types from '../actionTypes/cart';

const addItemToCartReducer = (state = {}, action) => {
    switch(action.type){
        case types.ADD_CART_ITEM:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

const getCartReducer = (state = [], action) => {
    switch(action.type) {
        case types.GET_CART_ITEMS:
            return action.payload 
        default:
            return state
    }
};

const removeCartItemReducer = (state = {}, action) => {
    switch(action.type){
        case types.REMOVE_CART_ITEM:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export { getCartReducer, addItemToCartReducer, removeCartItemReducer };
