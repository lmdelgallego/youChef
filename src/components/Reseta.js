import React, { Component } from 'react';

class Product extends Component {
  
  render() {
    
    const product = this.props.product;
    return (
      <div className="product">
        <img src={product.url} alt={product.title}/>
        {product.title}
      </div>
    );
  }
}

export default Product;