import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem, searchMember} from '../actions/action.js';

class SearchForm extends React.Component{
  handleSubmit(e){
    //chong refresh trang web
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(searchMember(this.refs.txt.value));
  }
  render(){
      return(
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input autoFocus type="text" placeholder="Enter your text" className="form-control mb5px" ref="txt"/>
          <br/>
          <button className="btn btn-info">Search</button>
        </form>
      )
  }
}

// chia se state cua store
module.exports = connect(function (state) {
  return {arrNote: state.arrNote}
})(SearchForm);
