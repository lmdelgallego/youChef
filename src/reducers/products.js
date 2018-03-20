function products(state = [],action){
	switch (action.type) {
		case 'RECEIVE_PRODUCTS':
			const { products } = action;
			return products
	
		default:
			return state;

	}
}

export default products;