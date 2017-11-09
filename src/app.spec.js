const app = require('./app')
const request = require('supertest').agent(app.listen())

describe.only('LAWS', () => {
  describe('GET /', () => {
    it('should list the laws', async () => {
      const result = await request
        .get('/')

      console.log('=============================')
      console.log(JSON.stringify(result))
      console.log('=============================')
    })
  })

  describe.skip('POST /laws/:id', () => {
    it('should update the law', async() => {
      const result = await request
        .post('/law/:id')
        .send({
          classification: 'Title',
          text: 'HUAHUDH'
        })

      console.log('=============================')
      console.log(JSON.stringify(result))
      console.log('=============================')
    })
  })
})
