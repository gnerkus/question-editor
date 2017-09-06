import React, { Component } from 'react'

class EditorLabel extends Component {
  constructor (props) {
    super(props)

    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange (textEvent) {
    const value = textEvent.target.value
    // this.props.handleLabelChange(this.props.labelKey, value)
  }

  render () {
    return (
      <input
        className={this.props.labelClass}
        onBlur={this.handleTextChange}
        type='text'
      />
    )
  }
}

export default EditorLabel
