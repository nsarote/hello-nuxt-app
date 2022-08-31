const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

/* app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
}) */

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from serverMiddleware',
    title: 'This is title from api hello',
  })
})

module.exports = app
