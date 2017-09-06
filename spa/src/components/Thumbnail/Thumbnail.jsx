import React, { Component } from 'react'

class Thumbnail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data_uri: 'http://www.iconninja.com/files/880/528/63/to-add-new-plus-create-icon.svg'
    }

    this.handleFile = this.handleFile.bind(this)
  }

  handleFile (fileEvent) {
    // this.props.handleFileUpload is a method passed to the Thumbnail
    // from the QuestionEditor component when a row is created.
    // The purpose of the method is to broadcast to the form that
    // an image has been uploaded in order to maintain a count.

    // this.props.thumbKey is an identifies for the thumbnail, sourced from
    // its parent column or row.

    // this.props.handleFileUpload(this.props.thumbKey, files[0])

    const reader = new window.FileReader()
    const file = fileEvent.target.files[0]

    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      }, () => {
        // this.props.handleFileUpload(this.props.thumbKey, upload.target.result)
      })
    }

    reader.readAsDataURL(file)
  }

  render () {
    let uploaded

    if (this.state.data_uri) {
      uploaded = (
        <img width='32px' height='32px' src={this.state.data_uri} />
      )
    }
    return (
      <div className='thumbnail-wrap'>
        {uploaded}
        <input
          className='thumbnail-input'
          onChange={this.handleFile}
          type='file'
        />
      </div>
    )
  }
}

export default Thumbnail
