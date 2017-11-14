import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import SearchForm from './SearchForm.js';
import SlideNav from './SlideNav.js';
import {connect} from 'react-redux';

class List extends React.Component{
  render(){
    return(
        <div id="container">
        <div id="content">
          <SearchForm/>
          <hr/>
          <NoteForm/>
          <hr/>
          <p>テスト用の会員一覧</p>
          {
            this.props.arrNote.map((e, i) => <Note index={i}
            key={i}> {e}</Note>)
          }
          <table id="table_id" class="display">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1 Data 1</td>
                <td>Row 1 Data 2</td>
              </tr>
              <tr>
                <td>Row 2 Data 1</td>
                <td>Row 2 Data 2</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    )
  }
}

// share state of store
module.exports = connect(function (state) {
  return {arrNote: state.arrNote}
})(List);
