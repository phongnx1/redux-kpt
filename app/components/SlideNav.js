import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem} from '../actions/action.js';

class SlideNav extends React.Component{

  // toggle1(){
  //   var {dispatch} = this.props;
  //   dispatch(toggle());
  // }
  render(){
    return(
      <ul id="slide-out" class="side-nav fixed">
        <li class="side-nav__logo">
          <img src="http://point.gmo.jp/gp/img/common/logo.png"> </img>
          <h3>Test Tool</h3>
        </li>
        <li class="side-nav__type">メンバーランク</li>
        <ul>
          <li><a href="/payment_dummy/get-cards">メンバーランク検索</a></li>
          <li><a href="/payment_dummy/register-card">テスト用メンバー登録</a></li>
        </ul>
      </ul>
    )
  }
}

// chia se state cua store
module.exports = connect(function (state) {
  return {isAdding: state.isAdding}
})(SlideNav);
