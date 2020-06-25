import axios from '../../config/axiosConfig';
import * as types from '../actionTypes/getProducts';

// actions
export const getProducts = () => {
	return { type: types.GET_PRODUCTS };
};

export const getProductSuccess = (payload) => {
	return { type: types.GET_PRODUCTS_SUCCESS, payload };
};

export const getProductFailure = (payload) => {
	return { type: types.GET_PRODUCTS_FAILURE, payload };
};

// action creator
export const handleGetAllProducts = (products) => async (dispatch) => {
	try {
		dispatch(getProducts());
		const response = await axios.get('/products', products);
		const data = response.data.product;
		dispatch(getProductSuccess(data));
	} catch (error) {
		dispatch(getProductFailure(error.response.data));
	}
};
