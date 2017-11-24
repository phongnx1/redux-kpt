import React from 'react';

class PointExpireInfors extends React.Component{
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='fieldA' isKey={ true }>Field A</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldB'>Field B</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}

// chia se state cua store
module.exports = PointExpireInfors
