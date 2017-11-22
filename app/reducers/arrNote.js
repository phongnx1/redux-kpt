import { ADD_ITEM, DELETE_ITEM, SEARCH_MEMBER, GET_DATA_RECEIVED, FETCH_SUCCESS} from '../constants/ActionTypes';
import Request from 'superagent';

var arrNoteReducer = (listMember = [], action) => {
  switch (action.type) {
    case SEARCH_MEMBER:
      return search(listMember, action.item);
    case ADD_ITEM:
      return [...listMember, action.item];
    case DELETE_ITEM:
      return listMember.filter((e, i) => i != action.index);
    case FETCH_SUCCESS:
      return action.data;
    default:
        return listMember;
  }
}

function search(listMember, email) {
  var test = [
    {
      'name': "phong",
      'age': 26,
      'mail': [
        "mail1": "xuanphong09t1@gmail.com",
        "mail2": "xuanphong09t1@gmail.com",
      ],
      'adress': "shibuya",
    },
    {
      'name': "Gianng",
      'age': 26,
      'mail': [
        "mail1": "xuanphong09t1@gmail.com",
        "mail2": "xuanphong09t1@gmail.com",
      ],
      'adress': "shibuya",
    },
  ];
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
        alert('Den day');
        dispatch(fetchPostsSuccess(data));
      }
    });
    // setTimeout(function () {
    //   alert(" Late");
    //   alert(test[0].name);
    //   return test;
    // }, 1000);
    //
    // //alert(test[0].name);
    // return test;
}

module.exports = arrNoteReducer;
