import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import API from './../../services/api'

const QuestionSummary = ({title, id}) => (
  <div>
    <Link to={`/questions/${id}`} children={title} />
  </div>
)

class QuestionList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: []
    }
  }

  componentWillMount () {
    API
      .getQuestions()
      .then(questions => {
        this.setState({
          questions
        })
      })
  }

  render () {
    return (
      <div>
        {this.state.questions.map((question, idx) => (
          <QuestionSummary
            key={`summary-${idx}`}
            title={question.title}
            id={question._id}
          />
        ))}
        <Link to='/new' children='Create Question' />
      </div>
    )
  }
}

export default QuestionList
