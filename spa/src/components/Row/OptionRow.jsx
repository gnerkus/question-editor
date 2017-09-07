import React, { Component } from 'react'

import Thumbnail from './../Thumbnail/Thumbnail.jsx'
import DeleteButton from './../Button/DeleteButton.jsx'
import EditorLabel from './../Label/EditorLabel.jsx'

class OptionRow extends Component {
  constructor (props) {
    super(props)

    this.showOptions = this.showOptions.bind(this)
  }

  showOptions () {
    let optionList = null
    const colKeys = Object.keys(this.props.columns)

    optionList = colKeys.map((col, idx) => (
      <input
        key={`${this.props.id}-${idx}`}
        type='radio'
        name={this.props.id}
        value={col}
        className='cell-input'
        defaultChecked={this.props.columns[col]}
        onChange={this.props.handleRadioSelect}
      />
    ))

    return optionList
  }

  render () {
    return (
      <div className='row'>
        <div className='option-row-label'>
          <DeleteButton
            btnAction={this.props.deleteRow}
            btnClass='del-row-btn'
            btnText='x'
            id={this.props.id}
          />
          <Thumbnail
            handleFileUpload={this.props.addThumb}
            thumb={this.props.rowThumb}
            id={this.props.id}
          />
          <EditorLabel
            handleLabelChange={this.props.changeRowLabel}
            labelClass='label-small'
            labelText={this.props.rowLabel}
            id={this.props.id}
          />
        </div>
        <div className='option-row-inputs'>
          {this.showOptions()}
        </div>
      </div>
    )
  }
}

export default OptionRow
