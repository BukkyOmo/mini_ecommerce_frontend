import * as types from '../actionTypes/getOwnProducts';
import axios from '../../config/axiosConfig';

// action
export const getOwnProductSuccess = (payload) => {
	return { type: types.GET_OWN_PRODUCTS, payload };
};

// action creators
export const handleGetOwnProducts = (products) => async (dispatch) => {
	try {
		const response = await axios.get('/products/mine', products);
		const data = response.data.product;
		dispatch(getOwnProductSuccess(data));
	} catch (error) {
		throw error;
	}
};
