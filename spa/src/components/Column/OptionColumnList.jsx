import React, { Component } from 'react'

import OptionColumn from './OptionColumn.jsx'
import NewColumn from './NewColumn.jsx'

class OptionColumnList extends Component {
  constructor (props) {
    super(props)

    this.showColumns = this.showColumns.bind(this)
  }

  showColumns () {
    let columns = null
    const colKeys = Object.keys(this.props.columns)

    columns = colKeys.map(column => (
      <OptionColumn
        key={column}
        id={column}
        columnLabel={this.props.columns[column].label}
        columnThumb={this.props.columns[column].thumb}
        deleteColumn={this.props.deleteColumn}
        changeColumnLabel={this.props.changeColumnLabel}
        addThumb={this.props.changeColumnThumb}
      />
    ))

    return columns
  }

  render () {
    return (
      <div className='option-col-list'>
        {this.showColumns()}
        <NewColumn
          addColumn={this.props.addColumn}
        />
      </div>
    )
  }
}

export default OptionColumnList
