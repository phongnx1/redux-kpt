import React from 'react';
import RegisterMembersForm from './RegisterMembersForm';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {RankType} from '../constants/RankType';
import {MemberStatus} from '../constants/MemberStatus';

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

class List extends React.Component {
  constructor(props) {
    super(props);
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

    var style = {
    	color:'red',
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
              <div id="message" style={style}></div>
            </div>
        </div>

        <div className="row search-member-from">
            <div className="col-lg-12">
                <SearchForm/>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <RegisterMembersForm/>
            </div>
        </div>

        <div className="row member-table">
            <div className="col-lg-12">
              <BootstrapTable data={ this.props.memberArr }
                  pagination options={ options } search
                  multiColumnSearch={ true }>
                  <TableHeaderColumn dataField='member_id' dataSort={ true } isKey={ true }>会員ＩＤ</TableHeaderColumn>
                  <TableHeaderColumn dataField='login' width='300' dataSort={ true }>ログイン</TableHeaderColumn>
                  <TableHeaderColumn dataField='status' dataSort={ true } dataFormat={ enumFormatter } formatExtraData={ MemberStatus }>ステータス</TableHeaderColumn>
                  <TableHeaderColumn dataField='invest_point' dataSort={ true }>通常ポイント</TableHeaderColumn>
                  <TableHeaderColumn dataField='limited_point' dataSort={ true }>期間限定ポイント</TableHeaderColumn>
                  <TableHeaderColumn dataField='current_rank' dataSort={ true } dataFormat={ enumFormatter } formatExtraData={ RankType }>現在ランク</TableHeaderColumn>
                  <TableHeaderColumn dataField='next_rank' dataSort={ true } dataFormat={ enumFormatter } formatExtraData={ RankType }>来月ランク</TableHeaderColumn>
              </BootstrapTable>
            </div>
        </div>

        <div id = "loader"></div>

      </div>
    )
  }
}

// share state of store
module.exports = connect(function (state) {
  return {memberArr: state.memberArr}
})(List);
