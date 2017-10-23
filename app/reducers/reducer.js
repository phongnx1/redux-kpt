var redux = require('redux');
var arrNote = require('./arrNote.js');
var isAdding = require('./isAdding.js');

var reducer = redux.combineReducers({arrNote, isAdding});

module.exports = reducer;
