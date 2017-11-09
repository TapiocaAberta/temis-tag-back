'use strict'

let chai = require('chai')
let expect = chai.expect
require('../../config/db')

let Law = require('./law.model')

describe('Law Model', function () {
  afterEach(async() => {
    await Law.remove()
  })

  it('should begin with no laws', async () => {
    let laws = await Law.find({})
    expect(laws).to.have.lengthOf(0)
  })

  it('should fail when saving without an email', async () => {
    let law = new Law({
      tag: 'TEST',
      text: 'Fake Law HUEHEU'
    })

    await law.save()
    expect(law._id).to.be.ok
  })
})
