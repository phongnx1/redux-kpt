import {fetchPostsSuccess} from '../actions/action.js';
import Request from 'superagent';

export const GetListMembers = (email, dispatch) => {
    return (
      Request
        .post('http://frontend.local/api/v1/tool/member/get-member-for-test')
        .withCredentials()
        .set('Content-Type', 'application/json')
        .send({ login: email})
        .end((err, res) =>{
          if (err || !res.ok) {
            alert("Call API get list member Fail!");
          } else {
            var data = JSON.stringify(res.body);
            var obj = JSON.parse(data);
            data = obj["data"]["login_extends"];
            dispatch(fetchPostsSuccess(data));
          }
        })
    )
}
