import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import SearchForm from './SearchForm.js';
import SlideNav from './SlideNav.js';
import {connect} from 'react-redux';

class List extends React.Component{

  render(){
    alert('List member: 222');
    //var listMember = this.props.arrNote;
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
                {this.props.arrNote.map(function(e, i) {
                  return (
                    <Note index={i} key={i}> {e.name}</Note>
                  )
              })}
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        DataTables Advanced Tables
                    </div>

                    <div className="panel-body">
                        <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                            <thead>
                                <tr>
                                    <th>MemberID</th>
                                    <th>Login</th>
                                    <th>Current rank</th>
                                    <th>Invest Point</th>
                                </tr>
                            </thead>
                            <tbody>
                              {this.props.arrNote.map(function(member, index) {
                                return(
                                  <tr className="odd gradeX">
                                      <td>{member.name}</td>
                                      <td>{member.login}</td>
                                      <td>{member.invest_point}</td>
                                      <td>{member.current_rank}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                        </table>
                    </div>
                </div>
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
