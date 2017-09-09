import React, { Component } from 'react'

import OptionRowList from './../Row/OptionRowList.jsx'
import OptionColumnList from './../Column/OptionColumnList.jsx'
import EditorLabel from './../Label/EditorLabel.jsx'

import Summary from './../Summary/Summary.jsx'

import { biggest, pluck } from './../../utils/aggregation'

const genID = () =>
  Math.random().toString(36).substring(2) +
    (new Date()).getTime().toString(36)

class QuestionForm extends Component {
  constructor (props) {
    super(props)

    this.state = props.question

    this.addNewRow = this.addNewRow.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.changeRowLabel = this.changeRowLabel.bind(this)
    this.changeRowThumb = this.changeRowThumb.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.optionSelect = this.optionSelect.bind(this)

    this.addNewColumn = this.addNewColumn.bind(this)
    this.changeColumnLabel = this.changeColumnLabel.bind(this)
    this.changeColumnThumb = this.changeColumnThumb.bind(this)
    this.deleteColumn = this.deleteColumn.bind(this)
  }

  addNewRow () {
    const rowCount = Object.keys(this.state.rows).length
    const rowID = genID()
    const rowLabel = `row${rowCount + 1}`

    const colKeys = Object.keys(this.state.columns)

    const newRow = {
      label: rowLabel,
      thumb: null,
      columns: {}
    }

    colKeys.forEach(colID => {
      newRow.columns[colID] = false
    })

    this.setState({
      rows: {
        ...this.state.rows,
        [rowID]: newRow
      }
    })
  }

  changeTitle (textEvent) {
    this.setState({
      title: textEvent
    })
  }

  changeRowLabel (newLabel, rowID) {
    this.setState({
      rows: {
        ...this.state.rows,
        [rowID]: {
          ...this.state.rows[rowID],
          label: newLabel
        }
      }
    })
  }

  changeRowThumb (imageText, rowID) {
    this.setState({
      imgUploadCount: this.state.imgUploadCount + 1,
      rows: {
        ...this.state.rows,
        [rowID]: {
          ...this.state.rows[rowID],
          thumb: imageText
        }
      }
    })
  }

  deleteRow (rowID) {
    const rows = {...this.state.rows}

    delete rows[rowID]

    this.setState({
      rows
    })
  }

  optionSelect (changeEvent) {
    const rowID = changeEvent.target.name
    const colID = changeEvent.target.value

    const updatedRow = this.state.rows[rowID]
    const colKeys = Object.keys(this.state.columns)
    colKeys.forEach(col => {
      updatedRow.columns[col] = false
    })
    updatedRow.columns[colID] = true

    this.setState({
      rows: {
        ...this.state.rows,
        [rowID]: updatedRow
      }
    })
  }

  addNewColumn () {
    const colCount = Object.keys(this.state.columns).length
    const colID = genID()
    const colLabel = `col${colCount + 1}`

    const newColumn = {
      label: colLabel,
      thumb: null
    }

    // update existing rows
    const rows = {...this.state.rows}
    const rowKeys = Object.keys(rows)

    rowKeys.forEach(row => {
      rows[row].columns[colID] = false
    })

    this.setState({
      rows,
      columns: {
        ...this.state.columns,
        [colID]: newColumn
      }
    })
  }

  changeColumnLabel (newLabel, colID) {
    this.setState({
      columns: {
        ...this.state.columns,
        [colID]: {
          ...this.state.columns[colID],
          label: newLabel
        }
      }
    })
  }

  changeColumnThumb (imageText, colID) {
    this.setState({
      imgUploadCount: this.state.imgUploadCount + 1,
      columns: {
        ...this.state.columns,
        [colID]: {
          ...this.state.columns[colID],
          thumb: imageText
        }
      }
    })
  }

  deleteColumn (colID) {
    const columns = {...this.state.columns}

    delete columns[colID]

    // update existing rows
    const rows = {...this.state.rows}
    const rowKeys = Object.keys(rows)

    rowKeys.forEach(row => {
      delete rows[row].columns[colID]
    })

    this.setState({
      rows,
      columns
    })
  }

  render () {
    console.log('Form state', this.state)
    return (
      <div className='flex'>
        <div className='flex-item-main'>
          <EditorLabel
            handleLabelChange={this.changeTitle}
            labelClass='label-large'
            labelText={this.state.title}
          />
          <OptionColumnList
            addColumn={this.addNewColumn}
            changeColumnLabel={this.changeColumnLabel}
            changeColumnThumb={this.changeColumnThumb}
            deleteColumn={this.deleteColumn}
            columns={this.state.columns}
          />
          <OptionRowList
            addRow={this.addNewRow}
            deleteRow={this.deleteRow}
            handleRadioSelect={this.optionSelect}
            changeRowThumb={this.changeRowThumb}
            changeRowLabel={this.changeRowLabel}
            rows={this.state.rows}
            columns={this.state.columns}
          />
          <button
            type='button'
            onClick={() => {
              this.props.btnAction(this.state)
            }}
          >
            {this.props.btnText}
          </button>
        </div>
        <div className='flex-item-aside'>
          <EditorLabel
            labelClass='label-large'
          />
          <Summary
            rowCount={Object.keys(this.state.rows).length}
            columnCount={Object.keys(this.state.columns).length}
            imgUploadCount={this.state.imgUploadCount}
            longestRowLabel={biggest(pluck(this.state.rows, 'label'), a => a.length).length}
            longestColumnLabel={biggest(pluck(this.state.columns, 'label'), a => a.length).length}
          />
        </div>
      </div>
    )
  }
}

export default QuestionForm
