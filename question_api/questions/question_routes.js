const questionController = require('./question_controller')
const questionRoutes = app => {
  app.route('/questions')
    .get(questionController.list)
    .post(questionController.create)

  app.route('/questions/:questionId')
    .get(questionController.get)
    .put(questionController.update)
}

module.exports = questionRoutes
