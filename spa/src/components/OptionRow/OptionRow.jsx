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
    if (this.props.options && Array.isArray(this.props.options)) {
      optionList = this.props.options.map((option, idx) => (
        <input
          key={`${this.props.rowLabel}-${idx}`}
          type='radio'
          name={this.props.rowLabel}
          value={option.columnName}
          className='cell-input'
          defaultChecked={option.isChecked}
          onChange={this.props.handleRadioSelect}
        />
      ))
    }
    return optionList
  }

  render () {
    return (
      <div>
        <div className='option-row-label'>
          <DeleteButton
            buttonAction={this.props.deleteRow}
            labelKey={this.props.key}
          />
          <Thumbnail
            handleFileUpload={this.props.addThumb}
            thumbKey={this.props.key}
          />
          <EditorLabel
            handleLabelChange={this.props.changeRowLabel}
            labelClass='label-small'
            labelText={this.props.rowLabel}
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
