import axios from '../../config/axiosConfig';
import * as types from '../actionTypes/getProducts';

// action
export const getProductSuccess = products => {
    return { type: types.GET_PRODUCTS_SUCCESS, products }
};

// action creator
export const getAllProducts = (products) => async (dispatch) => {
    try {
        const response = await axios.get('/products', products);
        const data = response.data.product;
        dispatch(getProductSuccess(data));
    } catch (error) {
        throw error;
    }
}