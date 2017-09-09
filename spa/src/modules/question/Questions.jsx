import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import QuestionList from './QuestionListPage.jsx'
import QuestionPage from './QuestionPage.jsx'

class Questions extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/questions'
            component={QuestionList}
          />
          <Route
            path='/questions/:questionId'
            component={QuestionPage}
          />
        </Switch>
      </div>
    )
  }
}

export default Questions
