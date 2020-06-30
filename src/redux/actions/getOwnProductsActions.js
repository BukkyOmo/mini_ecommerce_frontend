import * as types from '../actionTypes/getOwnProducts';
import axios from '../../config/axiosConfig';

// action
export const getOwnProductSuccess = (payload) => {
	return { type: types.GET_OWN_PRODUCTS, payload };
};

export const deleteProduct = (payload) => {
	return { type: types.DELETE_PRODUCT, payload }
}

// action creators
export const handleGetOwnProducts = (products) => async (dispatch) => {
	try {
		const response = await axios.get('/products/mine', products);
		const data = response.data.product;
		dispatch(getOwnProductSuccess(data));
	} catch (error) {
		console.log(error.response.data);
	}
};

export const handleDeleteProduct = (id) => async (dispatch) => {
	try {
		const response = await axios.delete(`/products/${id}`);
		const data = response.data;
		dispatch(deleteProduct(data));
		dispatch(handleGetOwnProducts(data));
	} catch (error) {
		console.log(error.response.data);
	}
}
