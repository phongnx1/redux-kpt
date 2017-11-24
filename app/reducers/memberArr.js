import { FETCH_SUCCESS } from '../constants/ActionTypes';

var memberArrReducer = (memberArr = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.data;
    default:
        return memberArr;
  }
}

module.exports = memberArrReducer;
