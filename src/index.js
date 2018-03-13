import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { Provider } from 'react-redux';
import store ,{history} from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>    
  , document.getElementById('root'));
registerServiceWorker();
