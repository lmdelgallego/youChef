import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import {loadState} from './localStorage';

//import reducers
import rootReducer from './reducers/index';

console.log(loadState())
const initialState = {
  cart: (typeof loadState() !== 'undefined') ? loadState().cart : {},
  products:[]
}

const middleware = [ thunk ];
middleware.push(logger);

export const history = createHistory();
middleware.push(routerMiddleware(history));


const store = createStore(rootReducer,initialState,compose(applyMiddleware(...middleware)) ) ;

export default store;
