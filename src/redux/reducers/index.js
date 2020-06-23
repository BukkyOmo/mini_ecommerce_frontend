import { combineReducers } from 'redux';
import productReducer from './productReducer';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import getProductsReducer from './getProductsReducer';

const rootReducer = combineReducers({
	products: productReducer,
	signUp: signUpReducer,
    logIn: loginReducer,
    getProducts: getProductsReducer
});

export default rootReducer;
