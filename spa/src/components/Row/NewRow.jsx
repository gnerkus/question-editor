import React, { Component } from 'react'

import DeleteButton from './../Button/DeleteButton.jsx'

class NewRow extends Component {
  render () {
    return (
      <div className='row'>
        <div className='option-row-label'>
          <DeleteButton
            btnAction={this.props.addRow}
            btnClass='new-row-btn'
            btnText='+'
            labelKey={this.props.key}
          />
        </div>
      </div>
    )
  }
}

export default NewRow
