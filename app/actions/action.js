import * as types from '../constants/ActionTypes';

function toggle() {
  return {
    type: types.TOGGLE_IS_ADDING
  };
}

function fetchPostsSuccess(data) {
  return {
    type: types.FETCH_SUCCESS,
    data
  }
}

module.exports = {toggle, fetchPostsSuccess};
