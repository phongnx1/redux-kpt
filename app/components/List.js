import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import {connect} from 'react-redux';

class List extends React.Component{
  remove(index){
    this.state.arrNote.splice(index, 1);
    this.setState(this.state);
  }

  addNote(note){
    this.state.arrNote.push(note);
    this.setState(this.state);
  }

  render(){
    return(
      <div className="div-list">
        <NoteForm handleAdd={this.addNote.bind(this)}/>
        {
          this.props.arrNote.map((e, i) => <Note index={i}
          handleRemove={this.remove.bind(this)}
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
