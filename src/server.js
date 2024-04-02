import express from 'express'

const app = express()
const port = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send({
    data: 'It works!'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app
