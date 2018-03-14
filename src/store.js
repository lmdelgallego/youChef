import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

//import reducers
import rootReducer from './reducers/index';

const browserHistory = createHistory();
//import 
const defaultState = {
	order: {},
	products: {}
}

const store = new createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store); 

export default store; 