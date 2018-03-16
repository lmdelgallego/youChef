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

export function receiveProducts(jsonProducts){
	return {
		type: 'RECEIVE_PRODUCTS',
		product: jsonProducts,
		receivedAt: Date.now()
	}
}



export function fetchProduct(products){
	return dispatch =>{
		dispatch(requestProducts(products));
		return fetch("https://jsonplaceholder.typicode.com/photos")
		.then(response => response.json())
		.then(json => {
			// console.log(json)
			// this.setState({
			//   products: json.slice(0, 20)
			// });
			
			this.props.setProducts(json.slice(0,100))

		});
	}
}