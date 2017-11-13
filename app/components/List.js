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
        <nav>
          <div class="nav-wrapper header">
              <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
          </div>
        </nav>
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
        </div>
        </div>
    )
  }
}

// share state of store
module.exports = connect(function (state) {
  return {arrNote: state.arrNote}
})(List);
