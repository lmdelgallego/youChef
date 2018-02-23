import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Product from '../components/Reseta';

import logo from '../images/logo_header.png';
import './Footer.css'

class Products extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[]
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
				// animations: projects.map((_, i) => new Animated.Value(0))
			},
			// () => {
			// 	Animated.stagger(
			// 		100,
			// 		this.state.animations.map(anim =>
			// 			Animated.spring(anim, { toValue: 1 })
			// 		)
			// 	).start();
			// }
		);
	}

  render() {
    return (
      <div>
        <div className="listProduct">
          <ul>
          {this.state.products.map((p,i) => {
            console.log(p);
            return(
              <li key={p.id}>
                <Product product={p} />
              </li>
            )
          })}
          </ul>
        </div>
        <footer style={{backgroundColor: this.props.muiTheme.palette.primary1Color}}>
          <img src={logo} alt="logo" />
        </footer>
      </div>
    );
  }
}

export default  muiThemeable()(Products);
;