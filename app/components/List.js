import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import SearchForm from './SearchForm.js';
import SlideNav from './SlideNav.js';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);
class List extends React.Component {

  render(){
    var listMember = this.props.arrNote.map(function(member, index) {
      return(
        <tr>
            <td>{member.member_id}</td>
            <td>{member.login}</td>
            <td>{member.invest_point}</td>
            <td>{member.current_rank}</td>
        </tr>
      )
    });
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
              <BootstrapTable data={ this.props.arrNote } pagination>
                  <TableHeaderColumn dataField='member_id' isKey={ true }>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='login'>Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='invest_point'>Product Price</TableHeaderColumn>
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
