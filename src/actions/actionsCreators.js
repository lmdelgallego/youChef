import {loadState, saveState} from '../localStorage';
import _ from 'lodash';

//Add PRODUCT TO CART
export function addToCart(productId) {
	return {
		type: 'ADD_TO_CART',
		productId
	}
}

export function receiveCart(cart) {
	return {
		type: 'RECEIVE_CART',
		cart
	}
}

// export const addToCart = productId => (dispatch, getState) => {
// 	console.log(getState(),productId);
// 	if(getState().cart.byId[productId].inventory > 0){
// 		dispatch(addProducToCart(productId));
// 	}
// }

//Remove PRODUCT TO CART
export function removeProductCart(productId, index) {
	return {
		type: 'REMOVE_ITEM',
		index,
		productId
	}
}

export function requestProducts(products){
	return{
		type: 'REQUEST_PRODUCTS',
		products
	}
}

export function receiveProducts(products){
	return {
		type: 'RECEIVE_PRODUCTS',
		products
	}
}

const shouldFetchProducts = (state, actions) => {
	console.log(loadState());
	if(!loadState()){
		return true;
	}
	return false;
}

function fetchProduct(products){
	return dispatch =>{
		dispatch(requestProducts(products));
		return fetch("https://jsonplaceholder.typicode.com/photos")
		.then(response => response.json())
		.then(json => dispatch( receiveProducts( json.slice(0,100) ) ) );
	}
}

export const fetchProductItNeeded = (products) => (dispatch, getState) =>{
	if(shouldFetchProducts(getState(), products)){
		return dispatch(fetchProduct(products));
	}else{
		return dispatch(receiveProducts(loadState().products));
	}
}

export const loadCart = () => (dispatch, getState) =>{
	console.log(loadState())
	return dispatch(receiveCart(loadState().cart));
}