const Application = require('../services/application')

/**
 * Return information about current state of API
 *
 * @module Controller
 * @main Controller
 * @class ApplicationCtrl
 * @constructor
 */

class ApplicationCtrl {
  constructor (response) {
    this.response = response
    this.app = new Application()
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  versionAction  (req, res) {
    this.response.use(res).success(this.app.version)
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  upTimeAction (req, res) {
    this.response.use(res).success(this.app.upTime)
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  nameAction (req, res) {
    this.response.use(res).success(this.app.name)
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   */
  indexAction (req, res) {
    this.response.use(res).success({
      name: this.app.name,
      version: this.app.version,
      uptime: this.app.upTime
    })
  }
}

module.exports = ApplicationCtrl
