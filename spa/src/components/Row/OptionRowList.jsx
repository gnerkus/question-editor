import React, { Component } from 'react'

import OptionRow from './OptionRow.jsx'
import NewRow from './NewRow.jsx'

class OptionRowList extends Component {
  constructor (props) {
    super(props)

    this.showRows = this.showRows.bind(this)
  }

  showRows () {
    let rows = null
    const rowKeys = Object.keys(this.props.rows)

    rows = rowKeys.map(row => (
      <OptionRow
        key={row}
        id={row}
        columns={this.props.rows[row].columns}
        rowLabel={this.props.rows[row].label}
        rowThumb={this.props.rows[row].thumb}
        handleRadioSelect={this.props.handleRadioSelect}
        deleteRow={this.props.deleteRow}
        changeRowLabel={this.props.changeRowLabel}
        addThumb={this.props.changeRowThumb}
      />
    ))

    return rows
  }

  render () {
    return (
      <div>
        {this.showRows()}
        <NewRow
          addRow={this.props.addRow}
        />
      </div>
    )
  }
}

export default OptionRowList
