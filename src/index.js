import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './stores';

import App from './containers/App';

import registerServiceWorker from './utils/registerServiceWorker';


render(
  <Provider {...store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
