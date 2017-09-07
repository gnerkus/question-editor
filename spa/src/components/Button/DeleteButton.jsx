import React, { Component } from 'react'

class DeleteButton extends Component {
  constructor (props) {
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick (clickEvent) {
    this.props.btnAction(this.props.id)
  }

  render () {
    return (
      <div className='thumbnail-wrap'>
        <div
          className={this.props.btnClass}
          onClick={this.handleButtonClick}
        >{this.props.btnText}</div>
      </div>
    )
  }
}

export default DeleteButton
