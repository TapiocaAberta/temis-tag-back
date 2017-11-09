const mongoose = require('mongoose')
const config = require('./environment')

async function run () {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development'
  mongoose.connect(config.mongo.uri, config.mongo.options)
}

run().catch(error => console.error(error.stack))
