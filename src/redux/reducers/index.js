import { combineReducers } from 'redux';
import createProductReducer from './createProductReducer';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import getProductsReducer from './getProductsReducer';
import getOwnProductsReducer from './getOwnProductsReducer';
import getOneProductReducer from './getOneProductReducer';
import { getCartReducer, addItemToCartReducer, removeCartItemReducer } from './cartReducer';

const rootReducer = combineReducers({
	createProduct: createProductReducer,
	signUp: signUpReducer,
	logIn: loginReducer,
	getProducts: getProductsReducer,
	getOwnProducts: getOwnProductsReducer,
	getOneProduct: getOneProductReducer,
	getCart: getCartReducer,
	addItemToCart: addItemToCartReducer,
	removeCartItem: removeCartItemReducer
});

export default rootReducer;
