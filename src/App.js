import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { red800, white} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductItem from './pages/ProductItem';
import PageShell from './components/PageShell';


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
        <div>
          <Route path="/" exact component={PageShell(Home)}></Route>
          <Route exact path="/products" render={props=>(<Products {...props} products={this.state.products} />)} />
          <Route path="/product/:id" render={props=>(<ProductItem {...props} products={this.state.products} />)} />
        </div>
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
