import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

import muiThemeable from 'material-ui/styles/muiThemeable';

import {loadState} from '../localStorage';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionsCreators';

import Header from '../components/Header';
import Product from '../components/Reseta';


import logo from '../images/logo_header.png';
import './ProductList.css';



class Products extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const {products} = this.props;
    this.props.fetchProductItNeeded(products);
  }
  
  render() {
    return (
      <div className="page">
        <Header back={false} {...this.props} />
        <div className="listProduct">
          <ul>
            {this.props.products.map((product) => {
              return(
                <li key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <Product product={product}/>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Products));