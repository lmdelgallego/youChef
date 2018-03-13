import React, { Component } from 'react';
import { Route } from 'react-router';

import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./components/animated_switch";

import { red800, white} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductItem from './pages/ProductItem';
import PageShell from './components/PageShell';


import { Provider } from 'react-redux';
import store, { history } from './store';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      products: []
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
  
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Route 
          render={({location}) => (
            <TransitionGroup component="main">
              <AnimatedSwitch key={location.key} location={location}>
                <Route path="/" exact component={Home}></Route>
                <Route exact path="/products" render={props=>(<Products {...props} products={this.state.products} />)} />
                <Route path="/product/:id" render={props=>(<ProductItem {...props} products={this.state.products} />)} />
              </AnimatedSwitch>
            </TransitionGroup>
          )}
        >

        </Route>
      </MuiThemeProvider>
    );
  }
}

const muiTheme = getMuiTheme({
  palette: {
    textColor: white,
    primary1Color: red800
  },
  appBar: {
    height: 50,
  }
});

export default App;
