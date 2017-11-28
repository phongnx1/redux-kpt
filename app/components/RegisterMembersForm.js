import React from 'react';
import {connect} from 'react-redux';
import {toggle, fetchPostsSuccess} from '../actions/action';
import {getListMembers, registerMembers, stopLoading} from '../common/SuperagentHelper';
import $ from 'jquery';
import * as validate from '../common/validateForm';

class RegisterMembersForm extends React.Component{
  componentDidMount() {

  }
  handleSubmit(e){
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

    if(!validate.checkCombinedLimitedPointAndExpiredDate(registerInfor.limitedPoint, registerInfor.expiredDate)){
      return false;
    }

    $("#loader").css({ display: "block" });
    $("#register-btn").attr("disabled", true);

    // Call API to register member
    registerMembers(registerInfor).end((err, res) => {
        if (err || !res.ok) {
          $("#register-btn").removeAttr("disabled");
          stopLoading();
          var data = JSON.stringify(res.body);
          var obj = JSON.parse(data);
          var error_message = obj["error_message"];
          alert("Call API register member fail! \n Error: " +error_message);
        } else {
          $("#register-btn").removeAttr("disabled");
          alert("Register successfully!");
          // Call API to get list member
          getListMembers(registerInfor.login, dispatch);
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
          <form onSubmit={this.handleSubmit.bind(this)} role="form" id="register-form">
            <div className="form-group">
              <label>GMO IDメールアドレス（＊）</label>
              <input type="email" autoFocus className="form-control" placeholder="gmoidtest@gmail.com" ref="login" required/>
            </div>

            <div className="form-group">
              <label>パスワード（＊）</label>
              <input pattern=".{6,}" title="Password は 6 文字以上でなければいけません。" className="form-control" placeholder="a@A1234" ref="password" required/>
            </div>

            <div className="form-group">
              <label>現在ランク（＊）</label>
              <select className="form-control" ref="currentRank">
                <option value="1">レギュラー</option>
                <option value="2">シルバー</option>
                <option value="3">ゴールド</option>
                <option value="4">プラチナ</option>
              </select>
            </div>

            <div className="form-group">
              <label>通常ポイント（＊）</label>
              <input type="number" id="replyNumber" min="0" data-bind="value:replyNumber" placeholder="100" className="form-control" ref="investPoint" required/>
              <p className="help-block">来月ランクの説明：99pt以下: レギュラー、 100 - 999pt： シルバー、 1000 - 2999pt： ゴールド、 3000pt以上： プラチナ</p>
            </div>

            <div className="form-group">
              <label>期間限定ポイント</label>
              <input type="number" id="replyNumber" min="0" data-bind="value:replyNumber" placeholder="100" className="form-control" ref="limitedPoint"/>
            </div>

            <div className="form-group">
              <label>期間限定日</label>
              <input className="form-control" id="date" pattern="[0-9]{4}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])" title="期間限定日 は Format: YYYYMMDD" placeholder="20170131" ref="expiredDate"/>
            </div>

            <div className="form-group">
              <label>件数（＊）</label>
              <input type="number" id="replyNumber" min="1" max= "10" data-bind="value:replyNumber"　placeholder="1" className="form-control"　ref="numberOfMember" required/>
            </div>

            <button type="button" onClick={this.toggle.bind(this)} className="btn btn-default">キャンセル</button>　
            <button className="btn btn-success" id="register-btn">登録</button>
          </form>
        </div>
      )
    }
    return(
        <button onClick={this.toggle.bind(this)} className="btn btn-primary add-new-btn" id="register-btn"> 新規登録 </button>
    )
  }
}

//share state of store
module.exports = connect(function (state) {
  return {isAdding: state.isAdding}
})(RegisterMembersForm);
