const router = require('express').Router()
const json_success = { code: 200, message: 'Success!' }
const json_notfound = { code: 404, message: 'Not found.' }

router.use((req, _, next) => {
  // simple log middleware
  // mount first
  console.log(`${req.method}: ${req.url}`)
  next()
})

router.get('/health-check', (_, res) => {
  // health check
  res.json(json_success)
})
router.get('*', (_, res) => {
  // 404 not found
  // mount last
  res.json(json_notfound)
})

module.exports = router
