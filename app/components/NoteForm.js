import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem, fetchPostsSuccess} from '../actions/action.js';
import {GetListMembers} from '../common/SuperagentHelper.js';
import Request from 'superagent';

// function getListMembers(email, dispatch) {
//   Request
//     .post('http://frontend.local/api/v1/tool/member/get-member-for-test')
//     .withCredentials()
//     .set('Content-Type', 'application/json')
//     .send({ login: email})
//     .end((err, res) =>{
//       if (err || !res.ok) {
//         alert("Call API get list member Fail!");
//       } else {
//         var data = JSON.stringify(res.body);
//         var obj = JSON.parse(data);
//         data = obj["data"]["login_extends"];
//         dispatch(fetchPostsSuccess(data));
//         dispatch(toggle());
//       }
//     });
// }

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
      numberOfMember: this.refs.numberOfMember.value,
    };

    Request
      .post('http://frontend.local/api/v1/tool/member/register-member-for-test')
      .withCredentials()
      .set('Content-Type', 'application/json')
      .send({
        login: registerInfor.login,
        password: registerInfor.password,
        current_rank: registerInfor.currentRank,
        invest_point: registerInfor.investPoint,
        limited_point: registerInfor.limitedPoint,
        expired_date: registerInfor.expiredDate,
        number_of_member: registerInfor.numberOfMember
      })
      .end((err, res) =>{
        if (err || !res.ok) {
          alert("Call API register member fail!");
        } else {
          GetListMembers(registerInfor.login, dispatch);
          //getListMembers(registerInfor.login, dispatch);
        }
      });
  }

  toggle(){
    var {dispatch} = this.props;
    dispatch(toggle());
  }
  render(){
    if(this.props.isAdding){
      return(
        <div>
          <p>会員登録</p>
          <form onSubmit={this.handleSubmit.bind(this)} role="form">
            <div className="form-group">
              <label>GMO IDメールアドレス</label>
              <input autoFocus className="form-control" placeholder="gmoidtest@gmail.com" ref="login" required/>
            </div>

            <div className="form-group">
              <label>パスワード</label>
              <input className="form-control" value="a@A1234" ref="password" required/>
            </div>

            <div className="form-group">
              <label>現在ランク</label>
              <select className="form-control" ref="currentRank">
                <option value="1">レギュラー</option>
                <option value="2">シルバー</option>
                <option value="3">ゴールド</option>
                <option value="4">プラチナ</option>
              </select>
            </div>

            <div className="form-group">
              <input type="text" placeholder="通常ポイント" className="form-control" ref="investPoint" required/>
            </div>

            <div className="form-group">
              <input type="text" placeholder="期間限定ポイント" className="form-control" ref="limitedPoint"/>
            </div>

            <div className="form-group">
              <label>期間限定日</label>
              <input className="form-control" placeholder="20170131" ref="expiredDate"/>
            </div>

            <div className="form-group">
              <input type="text"　placeholder="件数" className="form-control"　ref="numberOfMember" required/>
            </div>

            <br/>
            <button type="button" onClick={this.toggle.bind(this)} className="btn btn-default">キャンセール</button>　
            <button className="btn btn-success">登録</button>
          </form>
        </div>
      )
    }
    return(
        <button onClick={this.toggle.bind(this)} className="btn btn-primary" > 新規登録 </button>
    )
  }
}

// chia se state cua store
module.exports = connect(function (state) {
  return {isAdding: state.isAdding}
})(NoteForm);
