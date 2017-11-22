import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem, searchMember, fetchPostsSuccess} from '../actions/action.js';
import {GetListMembers} from '../common/SuperagentHelper.js';
import Request from 'superagent';

class SearchForm extends React.Component{
  handleSubmit(e){
    //chong refresh trang web
    e.preventDefault();
    var {dispatch} = this.props;
    var email = this.refs.txt.value;

    GetListMembers(email, dispatch);
    this.refs.txt.value = '';
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
