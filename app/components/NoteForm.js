import React from 'react';

class NoteForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    this.props.handleAdd(this.refs.txt.value);
    this.refs.txt.value = '';
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input autoFocus type="text" placeholder="Enter your text" className="form-control mb5px" ref="txt"/>
        <br/>
        <button className="btn btn-info">Send</button>
      </form>
    )
  }
}

module.exports = NoteForm;
