import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const App = props => (
  <div>
    <h1>Question Editor</h1>
    <Link to='/questions' children='View Questions' />
  </div>
)

export default App
