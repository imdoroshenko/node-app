const express = require('express'),
  conf = require('./config.js'),
  routes = require('./bootstrap/routes'),
  middleware = require('./bootstrap/middleware'),
  app = express()

middleware.pre(app, conf)
routes(app, {})
middleware.post(app, conf)

app.listen(conf.get('http.port'), () => {
  console.log(`Server started and listening to port ${conf.get('http.port')}`)
})

