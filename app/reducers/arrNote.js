import { ADD_ITEM, DELETE_ITEM } from '../constants/ActionTypes';

var arrNoteReducer = (state = ['Android','iOS', 'NodeJS'], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    case DELETE_ITEM:
      return state.filter((e, i) => i != action.index);
    default:
        return state;
  }
}

module.exports = arrNoteReducer;
