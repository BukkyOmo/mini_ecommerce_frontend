import * as types from '../actionTypes/getOneProduct';
import axios from '../../config/axiosConfig';
import { getProductFailure } from './getProductsActions';

export const getOneProductPending = () => {
    return { type: types.GET_PRODUCT_PENDING }
};

export const getOneProductSuccess = payload => {
    return { type: types.GET_PRODUCT_SUCCESS, payload }
};

export const getOneProductFailure = payload => {
    return { type: types.GET_PRODUCT_FAILURE, payload }
};

// action creators
export const handleGetProduct = (id, product) => async (dispatch) => {
    try {
        dispatch(getOneProductPending());
        const response = await axios.get(`/products/${id}`, product);
        const data = response.data.product;
        dispatch(getOneProductSuccess(data));  
    } catch (error) {
        dispatch(getOneProductFailure(error.response.data));
    }
}