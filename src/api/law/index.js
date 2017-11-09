'use strict'

let router = require('koa-router')()
let lawController = require('./law.controller')

router
  .get('/', lawController.getAll)
  .put('/tag/:id', lawController.updateLaw)

module.exports = router
