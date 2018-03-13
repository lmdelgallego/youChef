import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-rotuter';

//import reducers
import rootReducer from './reducers/index';

//import 
const defaultState = {
	order: {},
	products: {}
}

const store = new createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store; 