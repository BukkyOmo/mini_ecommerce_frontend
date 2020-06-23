import * as types from '../actionTypes/createProduct';
import axios from '../../config/axiosConfig';

// actions
export const createProduct = () => {
	return { type: types.CREATE_PRODUCT };
};

export const createProductSuccess = (payload) => {
	return { type: types.CREATE_PRODUCT_SUCCESS, payload };
};

export const createProductFailure = (payload) => {
	return { type: types.CREATE_PRODUCT_FAILURE, payload };
};

// action creators
export const handleCreateProduct = (product) => async (dispatch) => {
	try {
		dispatch(createProduct());
		const response = await axios.post('/products', product);
		const { data } = response.data;
		dispatch(createProductSuccess(data));
	} catch (error) {
		dispatch(createProductFailure(error));
	}
};
