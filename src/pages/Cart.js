import React, { Component } from 'react';
import { AppBar, List, ListItem, Avatar , IconButton} from 'material-ui';
import Delete from 'material-ui/svg-icons/action/delete';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionsCreators';
import * as fromReducers from '../reducers';

import Header from '../components/Header';

class Cart extends Component {

  constructor(props){
    super(props);
    this._handlerOnClick = this._handlerOnClick.bind(this);
  }

  componentDidMount(){
    if(this.props.products.length){
      this.props.loadCart();
    }else{
      const {products} = this.props;
      this.props.fetchProductItNeeded(products);
      this.props.loadCart();
    }
  }

  _handlerOnClick(productId, key) {
    this.props.removeProductCart(productId, key);
    //TODO: preguntad por el estado del la cantidad de productos - productId - en el state.
    // ejecutar this.
    console.log(this.props.cart.quantityById[productId] <= 1);
    if(this.props.cart.quantityById[productId] <= 1){
      this.props.deleteProductCart(productId,key);
    }

  }
  render() {
    console.log(this.props.getCart);
    return (
      <div className="page">
        <Header back={true} {...this.props}/>
        <div className="content">
          <h2>Your Cart</h2>
          <List>
            {this.props.getCart.map( (product, key) => {
              console.log(product, key)
              return(
                <ListItem key={key}
                primaryText={product.title}
                rightIconButton={<IconButton onClick={ () => this._handlerOnClick(product.id, key) }><Delete  color='red' /></IconButton>}
                leftAvatar={<Avatar src={product.url}/>}
                secondaryText={`${product.quantity} - $${parseInt(product.price)*product.quantity}`}
                secondaryTextLines={2}
                style={{color: 'black'}}
                />
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    cart: state.cart,
    getCart: fromReducers.getCartProduct(state)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)( muiThemeable()(Cart))