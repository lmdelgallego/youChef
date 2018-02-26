import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

import muiThemeable from 'material-ui/styles/muiThemeable';

import Product from '../components/Reseta';

import logo from '../images/logo_header.png';
import './ProductList.css';
import './Footer.css'

class Products extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[],
      animations: []
    }
  }

  componentDidMount(){
    this._renderProducts(this.props.products);
  }
  componentWillReceiveProps(nextProps) {
		if (!this.props.products.length && nextProps.products.length) {
			this._renderProducts(nextProps.products);
		}
	}

  _renderProducts(products) {
		this.setState(
			{
				products: products,
				animations: products.map((_, i) => new Animated.Value(0))
			},
			() => {
				Animated.stagger(
					100,
					this.state.animations.map(anim =>
						Animated.spring(anim, { toValue: 1 })
					)
				).start();
			}
		);
	}

  render() {
    return (
      <div className="page">
        <div className="listProduct">
        <TransitionGroup component="ul">
          {this.state.products.map((p,i) => {
            const style = {
							opacity: this.state.animations[i],
							transform: Animated.template`
								translate3d(0,${this.state.animations[i].interpolate({
								inputRange: [0, 1],
								outputRange: ["12px", "0px"]
							})},0)
							`
						};
            return(
              <li key={p.id}>
                <Animated.div style={style}>
                  <Link to={`/product/${p.id}`}>
                    <Product product={p} />
                  </Link>
                </Animated.div>
              </li>
            )
          })}
          </TransitionGroup>
        </div>
        <footer style={{backgroundColor: this.props.muiTheme.palette.primary1Color}}>
          <img src={logo} alt="logo" />
        </footer>
      </div>
    );
  }
}

export default  muiThemeable()(Products);