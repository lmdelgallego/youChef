import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getCartProduct = state => {
  return getAddedIds(state).map( id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state,id)
  }))
}

const rootReducer = combineReducers({cart, products, routing: routerReducer});

export default rootReducer;
