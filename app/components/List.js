import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import SearchForm from './SearchForm';
import SlideNav from './SlideNav.js';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {RankType} from '../constants/RankType';
import PointExpireInfors from './PointExpireInfors';

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  isExpandableRow(row) {
    if (row.expand.length > 0) return true;
    else return false;
  }

  expandComponent(row) {
    return (
      <PointExpireInfors data={ row.expand } />
    );
  }

  createCustomSearchField = (props) => {
    return (
      <SearchField
        className='my-custom-class'
        defaultValue={ props.defaultSearch }
        placeholder={ props.searchPlaceholder }/>
    );
  }

  render(){
    const options = {
      clearSearch: true,
      searchField: this.createCustomSearchField,
      expandRowBgColor: 'rgb(242, 255, 163)'
    };
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
              <BootstrapTable data={ this.props.arrNote }
                  pagination options={ options } search
                  multiColumnSearch={ true }
                  expandableRow={ this.isExpandableRow }
                  expandComponent={ this.expandComponent }
                  expandColumnOptions={ { expandColumnVisible: true } }>
                  <TableHeaderColumn dataField='member_id' dataSort={ true } isKey={ true }>Member ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='login' width='250' dataSort={ true }>Login</TableHeaderColumn>
                  <TableHeaderColumn dataField='status' dataSort={ true }>Status</TableHeaderColumn>
                  <TableHeaderColumn dataField='invest_point' dataSort={ true }>General point</TableHeaderColumn>
                  <TableHeaderColumn dataField='limited_point' dataSort={ true }>Limited point</TableHeaderColumn>
                  <TableHeaderColumn dataField='current_rank' dataSort={ true } dataFormat={ enumFormatter } formatExtraData={ RankType }>Current rank</TableHeaderColumn>
                  <TableHeaderColumn dataField='next_rank' dataSort={ true } dataFormat={ enumFormatter } formatExtraData={ RankType }>Next rank</TableHeaderColumn>
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
