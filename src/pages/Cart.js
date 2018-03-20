import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import muiThemeable from 'material-ui/styles/muiThemeable'

import Header from '../components/Header';

class Cart extends Component {
  render() {
    return (
      <div className="page">
        <Header back={true} {...this.props}/>
        <div className="content">
          <h2>Your Cart</h2>
        </div>
      </div>
    );
  }
}

export default muiThemeable()(Cart);