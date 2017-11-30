import {fetchPostsSuccess} from '../actions/action.js';
import Request from 'superagent';
import $ from 'jquery';

export const  stopLoading = () =>{
  $("#loader").css({ display: "none" });
}

export const getListMembers = (email, dispatch) => {
    return (
      Request
        .post('http://frontend.local/api/v1/tool/member/get')
        .withCredentials()
        .set('Content-Type', 'application/json')
        .send({ login: email})
        .end((err, res) =>{
          if (err || !res.ok) {
            stopLoading();
            var data = JSON.stringify(res.body);
            var obj = JSON.parse(data);
            var error_message = obj["error_message"];
            $("#message").text(error_message);
          } else {
            $("#message").text('');
            var data = JSON.stringify(res.body);
            var obj = JSON.parse(data);
            var memberArr = obj["data"]["members"];
            dispatch(fetchPostsSuccess(memberArr));
            stopLoading();
          }
        })
    )
};

export const registerMembers = (registerInfor) => {
    return (
      Request
        .post('http://frontend.local/api/v1/tool/member/register')
        .withCredentials()
        .set('Content-Type', 'application/json')
        .send({
          login: registerInfor.login,
          password: registerInfor.password,
          current_rank: registerInfor.currentRank,
          invest_point: registerInfor.investPoint,
          campaign_id: registerInfor.campaignId,
          regist_count: registerInfor.registCount
        })
    )
}
