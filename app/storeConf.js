//The root component
import { createStore} from 'redux';
import rootReducer from './reducers/rootReducer.js';


// initialState
const initialState = {}

// Create store
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

module.exports = store;
