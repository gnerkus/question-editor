import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App.jsx'
import Questions from './modules/question/Questions.jsx'
import NewQuestion from './modules/question/NewQuestionPage.jsx'

class Routes extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route
            path='/questions'
            component={Questions}
          />
          <Route
            path='/new'
            component={NewQuestion}
          />
        </Switch>
      </Router>
    )
  }
}

export default Routes
