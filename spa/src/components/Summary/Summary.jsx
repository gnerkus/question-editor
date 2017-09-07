import React from 'react'

const Summary = props => (
  <div>
    <p>Number of rows: <strong>{props.rowCount}</strong></p>
    <p>Number of columns: <strong>{props.columnCount}</strong></p>
    <p>Number of images uploaded: <strong>{props.imgUploadCount}</strong></p>
    <p>Longest row label: <strong>{props.longestRowLabel}</strong></p>
    <p>Longest column label: <strong>{props.longestColumnLabel}</strong></p>
  </div>
)

export default Summary
