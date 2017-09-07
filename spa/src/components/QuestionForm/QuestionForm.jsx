import React, { Component } from 'react'

import OptionRowList from './../Row/OptionRowList.jsx'
import EditorLabel from './../Label/EditorLabel.jsx'

const genID = () =>
  Math.random().toString(36).substring(2) +
    (new Date()).getTime().toString(36)

class QuestionForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: this.props.title,
      imgUploadCount: 0,
      rows: {
        r01: {
          label: 'row1',
          thumb: null,
          columns: {c01: false, c02: true}
        },
        r02: {
          label: 'row2',
          thumb: null,
          columns: {c01: false, c02: true}
        }
      },
      columns: {
        c01: { label: 'col1', thumb: null },
        c02: { label: 'col2', thumb: null }
      }
    }

    this.addNewRow = this.addNewRow.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.changeRowLabel = this.changeRowLabel.bind(this)
    this.changeRowThumb = this.changeRowThumb.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.optionSelect = this.optionSelect.bind(this)
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

  render () {
    console.log(this.state)
    return (
      <div>
        <EditorLabel
          handleLabelChange={this.changeTitle}
          labelClass='label-large'
          labelText={this.props.title}
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
      </div>
    )
  }
}

export default QuestionForm
