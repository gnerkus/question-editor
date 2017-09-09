import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import QuestionForm from './../../components/QuestionForm/QuestionForm.jsx'

import API from './../../services/api'

class QuestionPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      question: null
    }
  }

  componentWillMount () {
    API
      .getQuestion(this.props.match.params.questionId)
      .then(question => {
        this.setState({
          question
        })
      })
  }

  render () {
    let questionForm = null

    if (this.state.question) {
      questionForm = (
        <QuestionForm
          btnAction={formData => {
            API
              .updateQuestion(this.props.match.params.questionId, formData)
              .then(question => {
                this.setState({
                  question
                })
              })
          }}
          btnText='Update Question'
          question={this.state.question}
        />
      )
    }

    return questionForm
  }
}

export default withRouter(QuestionPage)
