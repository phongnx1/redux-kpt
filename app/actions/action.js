import * as types from '../constants/ActionTypes';

function addItem(item) {
  return {
    type: types.ADD_ITEM,
    item
  };
}

function deleteItem(index) {
  return {
    type: types.DELETE_ITEM,
    index
  };
}

function toggle() {
  return {
    type: types.TOGGLE_IS_ADDING
  };
}

function searchMember(item) {
  return {
    type: types.SEARCH_MEMBER,
    item
  };
}

function fetchPostsSuccess(data) {
  return {
    type: types.FETCH_SUCCESS,
    data
  }
}

module.exports = {addItem, deleteItem, toggle, searchMember, fetchPostsSuccess};
