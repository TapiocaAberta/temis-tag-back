/**
 * Module dependencies.
 */

const logger = require('koa-logger')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const app = module.exports = new Koa()
const router = new Router()
const lawController = require('./api/law/law.controller')
require('./config/db')

// middleware
app.use(bodyParser())
app.use(logger())

// route middleware
router.get('/', lawController.list)
router.get('/law/:id', lawController.updateLaw)

app
  .use(router.routes())
  .use(router.allowedMethods())

if (!module.parent) app.listen(3000)
