import React from 'react';

class Note extends React.Component{
  removeNote(){
    var {index, handleRemove} = this.props;
    handleRemove(index);
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

module.exports = Note;
