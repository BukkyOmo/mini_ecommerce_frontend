import * as types from '../actionTypes/getOwnProducts';

const getOwnProductsReducer = (state = [], action) => {
	switch (action.type) {
		case types.GET_OWN_PRODUCTS:
			return action.payload;
		default:
			return state;
	}
};

export default getOwnProductsReducer;
