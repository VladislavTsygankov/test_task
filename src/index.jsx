import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './helpers/store';
import history from './helpers/history';
import App from './components/app/app';

import './styles/styles.less';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
