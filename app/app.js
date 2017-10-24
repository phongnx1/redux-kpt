//Root component
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.js';
import store from './storeConf.js';

//provider is a component
import { Provider } from 'react-redux';

const appRoot = (
  <Provider store={store}>
    <List/>
  </Provider>
);

ReactDOM.render(appRoot, document.getElementById('root'))
