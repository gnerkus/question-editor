import React, { Component } from 'react'

import Thumbnail from './../Thumbnail/Thumbnail.jsx'
import DeleteButton from './../Button/DeleteButton.jsx'
import EditorLabel from './../Label/EditorLabel.jsx'

class OptionColumn extends Component {
  render () {
    return (
      <div className='col'>
        <div className='option-col-label'>
          <DeleteButton
            btnAction={this.props.deleteColumn}
            btnClass='del-row-btn'
            btnText='x'
            id={this.props.id}
          />
          <Thumbnail
            handleFileUpload={this.props.addThumb}
            thumb={this.props.columnThumb}
            id={this.props.id}
          />
          <EditorLabel
            handleLabelChange={this.props.changeColumnLabel}
            labelClass='label-small'
            labelText={this.props.columnLabel}
            id={this.props.id}
          />
        </div>
      </div>
    )
  }
}

export default OptionColumn
