import server from "../server.js"
import supertest from "supertest"

const requestWithSupertest = supertest(server)

describe('Base endpoint', () => {
  it('GET / should return it works message', async () => {
    const res = await requestWithSupertest.get('/')

    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining('json'))
    expect(res.body).toBeDefined()
    expect(res.body.data).toBeDefined()
    expect(res.body.data).toBe('It works!')
  })
})
