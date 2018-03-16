function order(state = [], action){

	switch (action.type) {
		case 'ADD_ITEM':
			return [
				...state
			];
			break;
		
		case 'REMOVE_ITEM':
			return state;
			break;

		default:
			return state;
			break;
	}

}

export default order;