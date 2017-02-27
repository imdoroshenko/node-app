const responseTime = require('response-time'),
  bodyParser = require('body-parser'),
  morgan = require('morgan')

/**
 * Pre-action middleware
 *
 * @method express
 * @for Bootstrap
 * @param app {express} instance of express
 * @param config {Object} application config
 * @return {undefined}
 */
function pre (app, config) {
  // add "X-Response-Time" header with response time
  app.use(responseTime())
  // parse JSON when "content-type: application/json" and valid body
  app.use(bodyParser.json())

  //CORS
  if (config.get('CORS.enabled')) {
    app.use((req, res, next) => {
      res.header(config.get('CORS.headers'))
      next()
    })
  }

  // log req/res details
  app.use(morgan(config.get('log.http_format')))
}

/**
 * Post-action middleware
 *
 * @method express
 * @for Bootstrap
 * @param app {express} instance of express
 * @param config {Object} application config
 * @return {undefined}
 */
function post(app, config) {

}

module.exports = {pre, post}
