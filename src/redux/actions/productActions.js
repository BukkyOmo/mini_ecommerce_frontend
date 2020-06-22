import * as types from '../actionTypes/createProduct';

export const createProduct = product => {
	return { type: types.CREATE_PRODUCT, product };
};
