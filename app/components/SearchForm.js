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
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref="txt"/>
          <button className="btn btn-info">Search</button>
          <br/>
        </form>
      )
  }
}

// chia se state cua store
module.exports = connect(function (state) {
  return {arrNote: state.arrNote}
})(SearchForm);
