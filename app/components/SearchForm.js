import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem, searchMember, fetchPostsSuccess} from '../actions/action.js';
import Request from 'superagent';

class SearchForm extends React.Component{
  handleSubmit(e){
    //chong refresh trang web
    e.preventDefault();
    var {dispatch} = this.props;
    var email = this.refs.txt.value;

    Request
      .post('http://frontend.local/api/v1/tool/member/get-member-for-test')
      .withCredentials()
      .set('Content-Type', 'application/json')
      .send({ login: email})
      .end((err, res) =>{
        if (err || !res.ok) {
          alert(res.content);
        } else {
          var data = JSON.stringify(res.body);
          var obj = JSON.parse(data);
          data = obj["data"]["login_extends"];
          dispatch(fetchPostsSuccess(data));
          this.refs.txt.value = '';
        }
      });

    //dispatch(searchMember(this.refs.txt.value));
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
