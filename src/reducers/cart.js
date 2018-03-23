import defaultState from './defaultState';
import _ from 'lodash';

const addedIds = (state=defaultState.cart.addedIds, action) =>{
	switch (action.type) {
		case 'ADD_TO_CART':
			if(state.indexOf(action.productId) !== -1){
				return state;
			}
			return [ ...state, action.productId ]
		case 'DELETE_ITEM':
			const {index} = action;
			return [
				...state.slice(0, index),
        ...state.slice(index + 1)
			];
		default:
			return state
	}
}

const quantityById = (state = defaultState.cart.quantityById, action) =>{
	const { productId, type } = action
	switch (type) {
		case 'ADD_TO_CART':
			return { ...state,
				[productId]: (state[productId] || 0 ) + 1
			}
			break;
		
		case 'REMOVE_ITEM':
			return {...state,
				[productId]: state[productId] - 1
			}
			break;

		case 'DELETE_ITEM':
			delete state[productId]
			return state;
	
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