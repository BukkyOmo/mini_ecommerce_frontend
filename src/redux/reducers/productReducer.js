const productReducer = (state = [], action) => {
	switch (action.type) {
		case 'CREATE_PRODUCT':
			return [...state, { ...action.product }];
		default:
			return state;
	}
};

export default productReducer;
