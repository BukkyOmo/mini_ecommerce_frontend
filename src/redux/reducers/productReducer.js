import * as types from '../actionTypes/createProduct';

const productReducer = (state = [], action) => {
	switch (action.type) {
		case types.CREATE_PRODUCT:
			return [...state, { ...action.product }];
		default:
			return state;
	}
};

export default productReducer;
