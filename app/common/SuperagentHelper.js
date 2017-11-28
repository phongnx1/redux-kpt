import {fetchPostsSuccess} from '../actions/action.js';
import Request from 'superagent';
import $ from 'jquery';

export const  stopLoading = () =>{
  $("#loader").css({ display: "none" });
}

export const getListMembers = (email, dispatch) => {
    return (
      Request
        .post('http://frontend.local/api/v1/tool/member/get-member-for-test')
        .withCredentials()
        .set('Content-Type', 'application/json')
        .send({ login: email})
        .end((err, res) =>{
          if (err || !res.ok) {
            stopLoading();
            var data = JSON.stringify(res.body);
            var obj = JSON.parse(data);
            var error_message = obj["error_message"];
            alert("Call API get list member Fail! \n Error: " +error_message);
          } else {
            var data = JSON.stringify(res.body);
            var obj = JSON.parse(data);
            var memberArr = obj["data"]["login_extends"];
            dispatch(fetchPostsSuccess(memberArr));
            stopLoading();
          }
        })
    )
};

export const registerMembers = (registerInfor) => {
    return (
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
    )
}
