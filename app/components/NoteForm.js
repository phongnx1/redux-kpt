import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem} from '../action.js';

class NoteForm extends React.Component{
  handleSubmit(e){
    //chong refresh trang web
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(addItem(this.refs.txt.value));
    dispatch(toggle());
  }

  toggle1(){
    var {dispatch} = this.props;
    dispatch(toggle());
  }
  render(){
    if(this.props.isAdding){
      return(
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input autoFocus type="text" placeholder="Enter your text" className="form-control mb5px" ref="txt"/>
          <br/>
          <button className="btn btn-info">Send</button>
        </form>
      )
    }
    return(
        <button onClick={this.toggle1.bind(this)}> + </button>
    )
  }
}

// chia se state cua store
module.exports = connect(function (state) {
  return {isAdding: state.isAdding}
})(NoteForm);
