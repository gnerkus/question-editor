import React from 'react'
import { withRouter } from 'react-router-dom'

import QuestionForm from './../../components/QuestionForm/QuestionForm.jsx'
import API from './../../services/api'

const NewQuestion = props => (
  <QuestionForm
    btnAction={formData => {
      API
        .createQuestion(formData)
        .then(() => props.history.push('/questions'))
    }}
    btnText='Create Question'
    question={{
      title: '',
      imgUploadCount: 0,
      rows: [],
      columns: []
    }}
  />
)

export default withRouter(NewQuestion)
