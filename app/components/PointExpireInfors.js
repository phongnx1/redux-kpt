import React from 'react';

class PointExpireInfors extends React.Component{
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='invest_point' isKey={ true }>期間限定ポイント</TableHeaderColumn>
          <TableHeaderColumn dataField='expired_date'>期間限定日</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}

module.exports = PointExpireInfors
