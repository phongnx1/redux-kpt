import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem} from '../actions/action.js';
import Request from 'superagent';

class NoteForm extends React.Component{
  handleSubmit(e){
    //chong refresh trang web
    e.preventDefault();
    var {dispatch} = this.props;

    var registerInfor = {
      login: this.refs.login.value,
      password: this.refs.password.value,
      currentRank: this.refs.currentRank.value,
      investPoint: this.refs.investPoint.value,
      limitedPoint: this.refs.limitedPoint.value,
      expiredDate: this.refs.expiredDate.value,
    };

    alert(registerInfor.login);

    Request
      .post('http://frontend.local/api/v1/tool/member/get-member-for-test')
      .withCredentials()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
      .set('Content-Type', 'application/json')
      .send({ login: 'gmoidtest0001@gmail.com'})
      .end((err, res) =>{
        if (err || !res.ok) {
          console.log(err);
          alert('Oh no! error');
        } else {
          alert('yay got ' + JSON.stringify(res.body));
        }
      });
    return false;

    //dispatch(addItem(this.refs.txt.value));
    //dispatch(toggle());
  }

  toggle1(){
    var {dispatch} = this.props;
    dispatch(toggle());
  }
  render(){
    if(this.props.isAdding){
      return(
        // <div>
        //   <p>会員登録</p>
        //   <form onSubmit={this.handleSubmit.bind(this)}>
        //     <input autoFocus type="text" placeholder="Enter your text" className="form-control mb5px" ref="txt"/>
        //     <br/>
        //     <button className="btn btn-info">Send</button>
        //   </form>
        // </div>
        <div>
          <p>会員登録</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input autoFocus type="text" placeholder="Login (gmoidtest@gmail.com)" className="form-control mb5px" ref="login"/>
            <input type="text" placeholder="password (a@A1234)" className="form-control mb5px" ref="password"/>
            <select className = "select-rank" ref="currentRank">
              <option value="1">REGULAR</option>
              <option value="2">SILVER</option>
              <option value="3">GOLD</option>
              <option value="4">PLATINUM</option>
            </select>
            <input type="text" placeholder="通常ポイント" className="form-control mb5px" ref="investPoint"/>
            <input type="text" placeholder="期間限定ポイント" className="form-control mb5px" ref="limitedPoint"/>
            <input type="text"　placeholder="期間 (Ex: 20181231)" className="datepicker" ref="expiredDate"/>
            <br/>
            <button className="btn btn-info">Send</button>
          </form>
        </div>
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
