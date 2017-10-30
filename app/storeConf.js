//The root component
import { createStore} from 'redux';
import rootReducer from './reducers/rootReducer.js';
import Request from 'superagent';

function getList() {
  var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjU5ZWYxM2E0YjMwOTIifQ.eyJpc3MiOiJodHRwczpcL1wvc3RnLWlkLmdtby5qcFwvYXBpXC92MVwvYXV0aFwvdG9rZW4iLCJhdWQiOiJHTU9JRCIsImp0aSI6IjU5ZWYxM2E0YjMwOTIiLCJpYXQiOjE1MDg4NDAzNTYsImV4cCI6MTUwOTAxMzE1Niwic2l0ZV9pZCI6Ijk5OTk5IiwiZW5jb2RlX3R5cGUiOjB9.QuhEhl3qNuBf6nlf0j2x41TxcZJp2cURLZqDrOAz9EU';
  var myHeaders = new Headers();
  var data = {"login":"gmoidtest0001@gmail.com"};

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('gmo-id-point-api-token', token);

  var options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  //var request = new Request('https://stg-id.gmo.jp/api/v1/member/get-uid', options);
  Request
    .post('https://stg-id.gmo.jp/api/v1/member/get-uid')
    .withCredentials()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials', 'true')
    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .set('Access-Control-Allow-Headers', 'gmo-id-point-api-token, Content-Type')
    .set('gmo-id-point-api-token', token)
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
  // fetch(request).then(function(response) {
  //   console.log(response);
  //   const status = response.status;
  //   alert(status);
  //   if(status === 'OK'){
  //     //
  //   } else {
  //     //
  //   }
  //   return ['Android', 'NodeJS']
  // });
}
// initialState
const initialState = {
  arrNote: getList(),
};

// Create store
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

module.exports = store;
