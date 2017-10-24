//Root component
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.js';
import NoteForm from './components/NoteForm.js';
import store from './storeConf.js';

//provider is a component
import { Provider } from 'react-redux';

const appRoot = (
  <Provider store={store}>
  <div>
    <List/>
  </div>
  </Provider>
);
ReactDOM.render(appRoot, document.getElementById('root'))
