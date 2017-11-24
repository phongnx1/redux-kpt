//Root component
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import RegisterMembersForm from './components/RegisterMembersForm';
import store from './storeConf';

import { Provider } from 'react-redux';

const appRoot = (
  <Provider store={store}>
  <div>
    <List/>
  </div>
  </Provider>
);

ReactDOM.render(appRoot, document.getElementById('root'))
