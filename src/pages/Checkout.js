import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionsCreators';
import * as fromReducers from '../reducers';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Header from '../components/Header';

import './Checkout.css';
import { TextField, RaisedButton, List, ListItem, Avatar } from 'material-ui';

const style = {
  labels: {
    color: 'black'
  },
  inputs:{
    color: 'black'
  }
}

class Checkout extends Component {
  componentDidMount(){
    if(this.props.products.length){
      this.props.loadCart();
    }else{
      const {products} = this.props;
      this.props.fetchProductItNeeded(products);
      this.props.loadCart();
    }
  }

    render() {
      return (
        <div className="page">
          <Header back={true} {...this.props} />
          <div className="content">
            <h4>Datos personales para la entrega</h4>
            <form>
              <TextField floatingLabelText="Nombre" fullWidth={true} floatingLabelStyle={style.labels} inputStyle={style.inputs}/>
              <TextField floatingLabelText="Dirección" fullWidth={true} floatingLabelStyle={style.labels} inputStyle={style.inputs}/>
              <TextField floatingLabelText="Teléfono" type="phone" fullWidth={true} floatingLabelStyle={style.labels} inputStyle={style.inputs}/>
              <TextField floatingLabelText="Email" type="email" fullWidth={true} floatingLabelStyle={style.labels} inputStyle={style.inputs}/>
            </form>
            <List>
              {this.props.getCart.map( (product, key ) => {
                return(
                  <ListItem key={key}
                  primaryText={product.title}
                  leftAvatar={<Avatar src={product.url} />}
                  secondaryText={`${product.quantity} - $${parseInt(product.price)*product.quantity}`}
                  secondaryTextLines={2}
                  style={style.labels}
                  />
                )
              })

              }
            </List>
          </div>
          <footer>
            <RaisedButton label="Realizar Pedido" primary={true} fullWidth={true} />
          </footer>
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


  export default connect(mapStateToProps, mapDispatchToProps)( muiThemeable()(Checkout))