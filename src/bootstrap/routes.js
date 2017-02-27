const AppCtrl = require('../controllers/app'),
  ErrorCtrl = require('../controllers/error'),
  Response = require('express-response').Response,
  JSONResponseDriver = require('express-response').driver.response.json,
  ExpressDownloadDriver = require('express-response').driver.download.express

module.exports = function (app, config){
  const response = new Response()
    .setLogLevel(Response.LOG_ERROR)
    .setConfig(config)
    .setResponseDriver(JSONResponseDriver)
    .setDownloadDriver(ExpressDownloadDriver)


  //hello world
  app.get('/', function (req, res) {
    console.log('Hello World!')
    response.use(res).success('Hello World!')
  })

  // api state
  const appCtrl = new AppCtrl(response)
  app.get('/app', appCtrl.indexAction.bind(appCtrl))
  app.get('/app/version', appCtrl.versionAction.bind(appCtrl))
  app.get('/app/uptime', appCtrl.upTimeAction.bind(appCtrl))
  app.get('/app/name', appCtrl.nameAction.bind(appCtrl))

  //errors
  const errorCtrl = new ErrorCtrl(response)
  // 404
  app.use(errorCtrl.notFoundAction.bind(appCtrl))
  // errors
  app.use(errorCtrl.errorAction.bind(appCtrl))
}
