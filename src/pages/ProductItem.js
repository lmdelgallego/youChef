import React, { Component } from 'react';
import * as Animated from "animated/lib/targets/react-dom";

import muiThemeable from 'material-ui/styles/muiThemeable';
import AddShopping from 'material-ui/svg-icons/action/add-shopping-cart';
import IconButton from 'material-ui/IconButton';

import Header from '../components/Header.js';
import './ProductItem.css';

class ProductItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: {},
      animate: new Animated.Value(0)
    }
  }

  componentDidMount(){
    if(this.props.products.length){
      this._renderProject(this.props.products);
    }
  }

  componentWillReceiveProps(nextProps) {
		if (!this.props.products.length && nextProps.products.length) {
			this._renderProject(nextProps.products);
		}
	}

  _renderProject(products) {
		let product = products.filter(p => {
			return (p.id === parseInt(this.props.match.params.id));
		});
		if (product.length) {
			this.setState({ product: product[0] });
			setTimeout(
				() =>
					Animated.spring(this.state.animate, { toValue: 1 }).start(),
				375
			);
		}
	}

  render() {
    const {product} = this.state;
    
    product.price = '12.500';
    
    return (
      <div className="page">
        <Header {...this.props} />
        <div className="content">
          <div className="product-info">
            <img src={product.url} alt={product.title}/>
            <h2>{product.title}</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan dolor odio, in rutrum risus scelerisque in. Vivamus vitae nibh odio. Nam vel luctus velit. Nullam sodales mi sed dolor condimentum pellentesque. Cras accumsan leo vitae iaculis elementum. Aliquam eget vehicula tortor, et elementum nulla. Vivamus viverra sit amet risus eu semper.
          </div>
        </div>
        <footer style={{backgroundColor: this.props.muiTheme.palette.primary1Color}}>
          <div className="product-info">
            <div className="product-title">
              {product.title}
            </div>
            <div className="product-desc">
              ${product.price} <em>por persona</em>
            </div>
          </div>
          <IconButton><AddShopping/></IconButton>
        </footer>    
      </div>
    );
  }
}
export default  muiThemeable()(ProductItem);