const MONGOOSE = require('mongoose')
MONGOOSE.Promise = global.Promise
MONGOOSE.connect('mongodb://mongo-data/question-editor')
