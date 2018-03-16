import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';



//import reducers
import rootReducer from './reducers/index';

export const history = createHistory();
const middleware = routerMiddleware(history);


const store = createStore(rootReducer, applyMiddleware(middleware));

export default store; 