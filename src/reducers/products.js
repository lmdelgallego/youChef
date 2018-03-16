function products(state = [],action){
	console.log(action)
	switch (action.type) {
		case 'SET_PRODUCTS':
			const { products } = action;
			return products;
			break;
	
		default:
			return state;
			break;
	}
}

export default products;