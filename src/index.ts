import express from 'express'
const app = express()

import router from './routes'
app.use(router)

const { HOST, PORT } = process.env
const port = +PORT

app.listen(port, HOST, () => {
  console.log(`Listening on ${HOST}:${port}.`)
})
