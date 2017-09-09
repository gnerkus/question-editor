const Question = require('./question_model')

const get = (req, res) =>
  Question.findById(req.params.questionId, (err, question) => {
    if (err) return res.status(500).send('There was an issue fetching the question.')
    if (!question) return res.status(404).send('The question does not exist.')
    return res.json(question)
  })

const list = (req, res) =>
  Question.find({}, (err, questions) => {
    if (err) res.status(500).send('There was an issue with listing the questions.')
    return res.json(questions)
  })

const create = (req, res) => {
  const newQuestion = new Question(req.body)
  newQuestion.save((err, question) => {
    if (err) return res.status(500).send('There was a problem adding the question.')
    res.json(question)
  })
}

const update = (req, res) => {
  Question.findByIdAndUpdate(req.params.questionId, req.body, {new: true}, (err, question) => {
    if (err) return res.status(500).send('There was a problem updating the question.')
    res.json(question)
  })
}

module.exports = {
  get, list, create, update
}
