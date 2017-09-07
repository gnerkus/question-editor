import React, { Component } from 'react'

class DeleteButton extends Component {
  constructor (props) {
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick (clickEvent) {
    // this.props.buttonAction(this.props.labelKey, value)
  }

  render () {
    return (
      <div className='thumbnail-wrap'>
        <div
          className='cell-button-label'
          onClick={this.handleButtonClick}
        >x</div>
      </div>
    )
  }
}

export default DeleteButton
