import _ from 'lodash';

function products(state = [],action){
	switch (action.type) {
		case 'RECEIVE_PRODUCTS':
			const { products } = action;
			return products
	
		default:
			return state;

	}
}

export const getProduct = (state, id) => _.find( state,{"id": parseInt(id) } )

export default products;