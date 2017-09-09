const EXPRESS = require('express')
const BODYPARSER = require('body-parser')

const ROUTES = require('./questions/question_routes')

const APP = EXPRESS()
APP.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

require('./db')

APP.use(BODYPARSER.urlencoded({ extended: true }))
APP.use(BODYPARSER.json())

ROUTES(APP)

module.exports = APP
