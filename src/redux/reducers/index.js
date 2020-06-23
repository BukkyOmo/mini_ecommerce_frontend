import { combineReducers } from 'redux';
import createProductReducer from './createProductReducer';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import getProductsReducer from './getProductsReducer';
import getOwnProductsReducer from './getOwnProductsReducer';

const rootReducer = combineReducers({
	createProduct: createProductReducer,
	signUp: signUpReducer,
	logIn: loginReducer,
	getProducts: getProductsReducer,
	getOwnProducts: getOwnProductsReducer
});

export default rootReducer;
