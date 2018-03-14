import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

import muiThemeable from 'material-ui/styles/muiThemeable';

import Header from '../components/Header';
import Product from '../components/Reseta';

import logo from '../images/logo_header.png';
import './ProductList.css';

class Products extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[],
      animations: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
			.then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json)
      this.setState({
        products: json.slice(0, 7)
      });
    });
  }

  // componentDidMount(){
  //   this._renderProducts(this.props.products);
  // }
  // componentWillReceiveProps(nextProps) {
	// 	if (!this.props.products.length && nextProps.products.length) {
	// 		this._renderProducts(nextProps.products);
	// 	}
	// }

  // _renderProducts(products) {
	// 	this.setState(
	// 		{
	// 			products: products,
	// 			animations: products.map((_, i) => new Animated.Value(0))
	// 		},
	// 		() => {
	// 			Animated.stagger(
	// 				100,
	// 				this.state.animations.map(anim =>
	// 					Animated.spring(anim, { toValue: 1 })
	// 				)
	// 			).start();
	// 		}
	// 	);
	// }

  render() {
    return (
      <div className="page">
        <Header {...this.props} />
        <div className="listProduct">
          <ul>
            {this.state.products.map((product) => {
              return(
                <li key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <Product product={product} />
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

export default  muiThemeable()(Products);