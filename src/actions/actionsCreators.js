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