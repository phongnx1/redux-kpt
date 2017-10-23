var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.js');
var store = require('./storeConf.js');

//provider la 1 component
var {Provider} = require('react-redux');

ReactDOM.render(
  <Provider store={store}>
    <List/>
  </Provider>,
  document.getElementById('root')
);
