'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let LawSchema = new Schema({
  tag: String,
  text: String
})

module.exports = mongoose.model('Law', LawSchema)
