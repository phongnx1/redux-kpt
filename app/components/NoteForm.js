import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component{
  handleSubmit(e){
    //chong refresh trang web
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch({
      type: 'ADD_ITEM',
      item: this.refs.txt.value,
    });
    dispatch({
      type: 'TOGGLE_IS_ADDING',
    });
  }

  toggle(){
    var {dispatch} = this.props;
    dispatch({
      type: 'TOGGLE_IS_ADDING',
    });
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
        <button onClick={this.toggle.bind(this)}> + </button>
    )
  }
}

// chia se state cua store
module.exports = connect(function (state) {
  return {isAdding: state.isAdding}
})(NoteForm);
