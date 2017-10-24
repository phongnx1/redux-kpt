//Root Reducer
import { combineReducers } from 'redux';
import arrNote from './arrNote.js';
import isAdding from './isAdding.js';

//The Root Reducer has a team, and aggregate them by combineReducers()
const rootReducer = combineReducers({
    arrNote: arrNote,
    isAdding
});

module.exports = rootReducer;
