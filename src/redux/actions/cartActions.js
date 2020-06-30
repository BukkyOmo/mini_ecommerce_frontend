import * as types from '../actionTypes/cart';
import axios from '../../config/axiosConfig';

// action
export const addToCartAction = (payload) => {
    return { type: types.ADD_CART_ITEM, payload }
};
export const getCartAction = (payload) => {
    return { type: types.GET_CART_ITEMS, payload }
}
export const removeFromCart = (payload) => {
    return { type: types.REMOVE_CART_ITEM, payload }
}

//action creator
export const handleAddToCart = (id, product) => async (dispatch) => {
    try {
        const response = await axios.post(`/carts/${id}`, product);
        const data = response.data.product;
        dispatch(addToCartAction(data)); 
        dispatch(handleGetCartItems(data));  
    } catch (error) {
        console.log(error.response);
    }
}

export const handleGetCartItems = (products) => async (dispatch) => {
    try {
        const response = await axios.get('/carts', products);
        const data = response.data.products;
        dispatch(getCartAction(data));   
    } catch (error) {
        console.log(error.response);
    }
}

export const handleRemoveItemFromCart = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`/carts/${id}`);
        const data = response.data;
        dispatch(removeFromCart(data));
        dispatch(handleGetCartItems(data));
    } catch (error) {
        console.log(error.response);
    }
}
