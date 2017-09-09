const EXPRESS = require('express')
const BODYPARSER = require('body-parser')

const ROUTES = require('./questions/question_routes')

const APP = EXPRESS()
require('./db')

APP.use(BODYPARSER.urlencoded({ extended: true }))
APP.use(BODYPARSER.json())

ROUTES(APP)

module.exports = APP
