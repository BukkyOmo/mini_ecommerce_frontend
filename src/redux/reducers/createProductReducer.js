import * as types from '../actionTypes/createProduct';

const initialState = {
	pending: false,
	data: null,
	error: null
};

const createProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CREATE_PRODUCT:
			return { ...state, pending: true };
		case types.CREATE_PRODUCT_SUCCESS:
			return { ...state, pending: false, data: action.payload, error: null };
		case types.CREATE_PRODUCT_FAILURE:
			return { ...state, pending: false, error: action.payload };
		default:
			return state;
	}
};

export default createProductReducer;
