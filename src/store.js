import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

//import reducers
import rootReducer from './reducers/index';

export const history = createHistory();
const middleware = routerMiddleware(history);

//import 
const defaultState = {
	order: {},
	products: {}
}

const store = createStore(rootReducer, applyMiddleware(middleware));

export default store; 