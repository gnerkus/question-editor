import React, { Component } from 'react'

import DeleteButton from './../Button/DeleteButton.jsx'

class NewColumn extends Component {
  render () {
    return (
      <div>
        <div className='option-col-label'>
          <DeleteButton
            btnAction={this.props.addColumn}
            btnClass='new-row-btn'
            btnText='+'
            labelKey={this.props.key}
          />
        </div>
      </div>
    )
  }
}

export default NewColumn
