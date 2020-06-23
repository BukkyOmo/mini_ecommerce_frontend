import * as types from '../actionTypes/getProducts';

const getProductsReducer = (state = [], action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_SUCCESS:
            return action.products
        default:
            return state;
    }
}

export default getProductsReducer;
