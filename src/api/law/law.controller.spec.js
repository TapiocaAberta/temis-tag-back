const controller = require('./law.controller')

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

  it('should list all laws', async () => {
    let law = new Law({tag: 'TEST', text: 'Fake Law HUEHEU'})
    await law.save()

    let result = await controller.list(a)

    console.log('=============================')
    console.log(JSON.stringify(result))
    console.log('=============================')
  })

  it('should update the existent law', async () => {
    let law = new Law({tag: 'TEST', text: 'Fake Law HUEHEU'})
    await law.save()

    let result = await controller.update(a)

    expect(law._id).to.be.ok
  })
})
