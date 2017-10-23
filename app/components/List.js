import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import {connect} from 'react-redux';

class List extends React.Component{
  render(){
    return(
      <div className="div-list">
        <NoteForm />
        {
          this.props.arrNote.map((e, i) => <Note index={i}
          key={i}> {e}</Note>)
        }
      </div>
    )
  }
}

// chia se state cua store
module.exports = connect(function (state) {
  return {arrNote: state.arrNote}
})(List);
