var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List');
var store = require('./example.js');
//provider la 1 component
var {Provider} = require('react-redux');

ReactDOM.render(
  <Provider store={store}>
    <List/>
  </Provider>,
  document.getElementById('root')
);
