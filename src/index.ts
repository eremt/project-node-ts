import express from 'express'
const app = express()

import router from './routes'

app.use(router)

const HOST = '0.0.0.0'
const PORT = 5000

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}.`)
})
