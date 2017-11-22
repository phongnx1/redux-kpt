import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import SearchForm from './SearchForm.js';
import SlideNav from './SlideNav.js';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class List extends React.Component {

  render(){
    return(
      <div>
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">会員登録</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <SearchForm/>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <NoteForm/>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
              <BootstrapTable data={ this.props.arrNote } pagination search={ true } multiColumnSearch={ true }>
                  <TableHeaderColumn dataField='member_id' dataSort={ true } isKey={ true }>Member ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='login' dataSort={ true }>Login</TableHeaderColumn>
                  <TableHeaderColumn dataField='status' dataSort={ true }>Status</TableHeaderColumn>
                  <TableHeaderColumn dataField='invest_point' dataSort={ true }>General point</TableHeaderColumn>
                  <TableHeaderColumn dataField='limited_point' dataSort={ true }>Limited point</TableHeaderColumn>
                  <TableHeaderColumn dataField='current_rank' dataSort={ true }>Current rank</TableHeaderColumn>
                  <TableHeaderColumn dataField='next_rank' dataSort={ true }>Next rank</TableHeaderColumn>
              </BootstrapTable>
            </div>
        </div>

      </div>
    )
  }
}

// share state of store
module.exports = connect(function (state) {
  return {arrNote: state.arrNote}
})(List);
