const express = require('express')
const routes = require('./bootstrap/routes')
const app = express()

routes(app, {})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
