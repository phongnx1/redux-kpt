import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';

class List extends React.Component{
  constructor(props) {
      super(props);
      this.state = {arrNote: ['Android', 'iOS', 'NodeJS']}
  }

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
          this.state.arrNote.map((e, i) => <Note index={i}
          handleRemove={this.remove.bind(this)}
          key={i}> {e}</Note>)
        }
      </div>
    )
  }
}

module.exports = List;
