var redux = require('redux');

// var defaultState = {
//   arrNote: ['Android', 'Docker','iOS'],
//   isAdding: false
// };
// var reducer = (oldState = defaultState, action) => {
//   switch (action.type) {
//     case 'TOGGLE_IS_ADDING':
//       return {...oldState, isAdding: !oldState.isAdding};
//     case 'ADD_ITEM':
//       return {...oldState, arrNote: [...oldState.arrNote, action.item]};
//     case 'DELETE_ITEM':
//       return {...oldState, arrNote: oldState.arrNote.filter((e, i) => i != action.index)};
//     default:
//         return oldState;
//   }
// }
var isAddingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return  !state;
    default:
        return state;
  }
}

var arrReducer = (state = ['Android','iOS', 'NodeJS'], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'DELETE_ITEM':
      return state.filter((e, i) => i != action.index);
    default:
        return state;
  }
}

var reducer = redux.combineReducers({
  arrNote: arrReducer,
  isAdding: isAddingReducer
});

var store = redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  var str = store.getState();
  document.getElementById('p-detail').innerHTML = JSON.stringify(str);
});

store.dispatch({type: 'TOGGLE_IS_ADDING'});

store.dispatch({
  type: 'ADD_ITEM',
  item: 'Unity'
});

store.dispatch({
  type: 'DELETE_ITEM',
  index: 1
});
