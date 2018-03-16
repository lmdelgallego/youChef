import {loadState, saveState} from '../localStorage';

//Add PRODUCT TO ORDER
export function addProductoOrder(index) {
	return {
		type: 'ADD_ITEM',
		index
	}
}

//Remove PRODUCT TO ORDER
export function removeProductOrder(productId, index) {
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
		products,
		receivedAt: Date.now()
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