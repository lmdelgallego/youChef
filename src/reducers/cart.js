import defaultState from './defaultState';

const addedIds = (state=defaultState.cart.addedIds, action) =>{
	switch (action.type) {
		case 'ADD_TO_CART':
			if(state.indexOf(action.productId) !== -1){
				return state;
			}
			return [ ...state, action.productId ]
	
		default:
			return state
	}
}

const quantityById = (state = defaultState.cart.quantityById, action) =>{
	switch (action.type) {
		case 'ADD_TO_CART':
			const { productId } = action
			return { ...state,
				[productId]: (state[productId] || 0 ) + 1
			}
	
		default:
			return state
	}
}

export const getQuantity = (state, productId) => state.quantityById[productId] || 0
export const getAddedIds = state => state.addedIds

export const getTotalQuantity = (state) => {
	console.log(state);
}

const cart = (state=defaultState.cart, action ) => {
	switch (action.type) {
		case 'CHECKOUT_REQUEST':
			return defaultState;
		
		case 'CHECKOUT_FAILURE':
			return action.cart
	
		default:
			return{
				addedIds: addedIds(state.addedIds, action),
				quantityById: quantityById(state.quantityById, action)
			}
	}
}

export default cart;