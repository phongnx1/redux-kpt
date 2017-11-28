import React from 'react';
import {connect} from 'react-redux';
import {toggle, fetchPostsSuccess} from '../actions/action';
import {getListMembers} from '../common/SuperagentHelper';
import Request from 'superagent';
import $ from 'jquery';

class SearchForm extends React.Component{
  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var email = this.refs.txt.value;
    $("#loader").css({ display: "block" });
    getListMembers(email, dispatch);
  }

  render() {
      return(
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" ref="txt" required/>
          <button className="btn btn-info search-btn">検索</button>
        </form>
      )
  }
}

// share state of store
module.exports = connect(function (state) {
  return {memberArr: state.memberArr}
})(SearchForm);
