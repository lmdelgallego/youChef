import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import order from './order';
import products from './products';

const rootReducer = combineReducers({order, products, routing: routerReducer});

export default rootReducer;
