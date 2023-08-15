const express = require('express')
const app = express()
const router = require('./src/routes')

app.use(router)

const host = '0.0.0.0'
const port = 5000
app.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`)
})
