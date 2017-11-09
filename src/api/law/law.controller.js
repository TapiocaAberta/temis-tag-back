'use strict'

let Law = require('./law.model')

class Controller {
  static async list (ctx) {
    const result = Law.find({})
    ctx.body = result
  }

  static async updateLaw (ctx) {
    let _id = ctx.params.id
    let {tag} = ctx.body

    let lawToBeUpdate = await Law.findOne({_id})
    if (!lawToBeUpdate) ctx.throw(404, 'invalid tag')

    lawToBeUpdate.tag = tag
    await lawToBeUpdate.save()

    ctx.body = {status: 'ok'}
  }
}

module.exports = Controller
