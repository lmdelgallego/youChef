import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Products from './pages/Products';
import ProductItem from './pages/ProductItem';
import registerServiceWorker from './registerServiceWorker';

import { red800, white} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';

import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store,{history} from './store';

const muiTheme = getMuiTheme({
  palette: {
    textColor: white,
    primary1Color: red800
  },
  appBar: {
    height: 50,
  }
});

const router = (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/products" component={Products}/>
          <Route exact path="/product/:id" component={ProductItem}/>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
