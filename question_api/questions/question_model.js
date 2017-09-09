const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  title: String,
  imgUploadCount: Number,
  rows: Schema.Types.Mixed,
  columns: Schema.Types.Mixed
})

module.exports = mongoose.model('Questions', questionSchema)
