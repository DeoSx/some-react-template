import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './_store';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
