import React, { Component } from 'react';
import './Product.css';
class Product extends Component {
  
  render() {
    
    const product = this.props.product;
    product.price = '12.500';
    return (
      <div className="product" style={{ backgroundImage: `url(${product.url})` }}>
        <div className="product-info">
          <div className="product-title">
            {product.title}
          </div>
          <div className="product-desc">
            ${product.price} <em>por persona</em>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;