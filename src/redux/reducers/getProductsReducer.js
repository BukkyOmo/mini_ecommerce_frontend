import * as types from '../actionTypes/getProducts';

const initialState = {
	pending: false,
	products: [],
	error: null
};

const getProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_PRODUCTS:
			return { ...state, pending: true };
		case types.GET_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload,
				pending: false,
				error: null
			};
		case types.GET_PRODUCTS_FAILURE:
			return { ...state, pending: false, error: action.payload };
		default:
			return state;
	}
};

export default getProductsReducer;
