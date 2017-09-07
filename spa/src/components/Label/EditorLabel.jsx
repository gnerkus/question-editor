import React, { Component } from 'react'

class EditorLabel extends Component {
  constructor (props) {
    super(props)

    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange (textEvent) {
    const value = textEvent.target.value
    this.props.handleLabelChange(value, this.props.id)
  }

  render () {
    return (
      <input
        className={this.props.labelClass}
        onBlur={this.handleTextChange}
        type='text'
        defaultValue={this.props.labelText}
      />
    )
  }
}

export default EditorLabel
