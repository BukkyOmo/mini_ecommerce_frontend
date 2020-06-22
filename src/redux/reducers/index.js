import { combineReducers } from 'redux';
import productReducer from './productReducer';
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
	products: productReducer,
	signUp: signUpReducer,
	logIn: loginReducer
});

export default rootReducer;
