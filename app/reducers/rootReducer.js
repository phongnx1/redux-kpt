import { combineReducers } from 'redux';
import memberArr from './memberArr';
import isAdding from './isAdding';

const rootReducer = combineReducers({
    memberArr,
    isAdding
});

module.exports = rootReducer;
