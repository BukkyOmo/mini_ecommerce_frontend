import * as types from '../actionTypes/getOneProduct';

const initialState = {
    pending: false,
    product: {},
    error: null
};

const getOneProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_PRODUCT_PENDING: 
            return { ...state, pending: true }
        case types.GET_PRODUCT_SUCCESS:
            return { ...state, product: action.payload, pending: false, error: null };
        case types.GET_PRODUCT_FAILURE:
            return { ...state, error: action.payload, pending: false };
        default:
            return state;
    }
};

export default getOneProductReducer;
