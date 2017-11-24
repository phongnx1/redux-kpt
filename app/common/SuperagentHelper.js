import {fetchPostsSuccess} from '../actions/action.js';
import Request from 'superagent';

export const GetListMembers = (email, dispatch) => {
    var data = [{
      member_id: 1,
      login: "xuanphong09t1@gmail.com",
      status: "02",
      invest_point: 100,
      limited_point: 30,
      current_rank: 1,
      next_rank: 3,
      expand: [ {
          fieldA: 'test1',
          fieldB: 'test1',
        }, {
          fieldA: 'test2',
          fieldB: 'test2',
        }]
      },
    {
      member_id: 2,
      login: "xuanphong09t1@gmail.com",
      status: "02",
      invest_point: 100,
      limited_point: 30,
      current_rank: 1,
      next_rank: 3,
      expand: []
      }
      ];
    // return (
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
    //       }
    //     })
    // )
    return (
      dispatch(fetchPostsSuccess(data))
    )
}
