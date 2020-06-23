import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from '../components/products/product-list.jsx';
import SignUpForm from '../components/forms/Signup.jsx';
import LoginForm from '../components/forms/Login.jsx';
import Homepage from '../components/home/Homepage.jsx';
import PageNotFound from '../components/pagenotfound/PageNotFound.jsx';
import Header from '../components/common/Header';
import CreateProduct from '../components/products/create-products';
import UserProductList from '../components/products/user-product-list';
import ProductComponent from '../components/products/product';

const Routes = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/signup' component={SignUpForm} />
				<Route path='/signin' component={LoginForm} />
				<Route path='/create' component={CreateProduct} />
				<Route path='/products-user' component={UserProductList} />
				<Route path='/products/:id' component={ProductComponent} />
				<Route path='/products' component={ProductList} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Routes;
