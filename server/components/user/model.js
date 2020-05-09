const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  name: String,
  avatar: String,
  description: String,
  location: String,
  twitter: String,
})

const model = mongoose.model('User', mySchema)

module.exports = model
