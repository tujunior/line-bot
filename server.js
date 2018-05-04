const express = require('express')
const app = express()

app.get('/test', (req, res) => {
  res.send('test')
})
let server
server = app.listen('8081')
console.log('Server running')