import { ADD_ITEM, DELETE_ITEM, SEARCH_MEMBER } from '../constants/ActionTypes';

var arrNoteReducer = (state = ['Android','iOS', 'NodeJS'], action) => {
  switch (action.type) {
    case SEARCH_MEMBER:
      return search(state);
    case ADD_ITEM:
      return [...state, action.item];
    case DELETE_ITEM:
      return state.filter((e, i) => i != action.index);
    default:
        return state;
  }
}

function search(state) {
  return [...state, "Search"];
}

module.exports = arrNoteReducer;
