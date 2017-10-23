import React from 'react';
import {connect} from 'react-redux';
import {deleteItem} from '../action.js';

class Note extends React.Component{
  removeNote(){
    var {index, dispatch} = this.props;
    dispatch(deleteItem(index));
  }
  render(){
    return(
      <div className="div-note">
        <p>{this.props.children}</p>
        <button onClick={this.removeNote.bind(this)} className="btn btn-danger" data-toggle="confirmation">Delete</button>
        <button onClick={this.edit} className="btn btn-primary">Edit</button>
      </div>
    )
  }
}

// chia se state cua store
module.exports = connect(function (state) {
  return {arrNote: state.arrNote}
})(Note);
