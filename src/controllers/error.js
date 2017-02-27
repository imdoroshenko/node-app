const {NotFound} = require('exceptions')

/**
 * Return information about current state of API
 *
 * @module Controller
 * @main Controller
 * @class ErrorCtrl
 * @constructor
 */

class ErrorCtrl {
  constructor (response) {
    this.response = response
  }
  /**
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   * @param {Function} next ExpressJS callback for next middleware
   */
  notFoundAction (req, res, next) {
    this.response.use(res)
      .error(new NotFound('Route not found'))
  }
  /**
   * @param {Error} err error that passed from previous middleware
   * @param {Request} req ExpressJS request object
   * @param {Response} res ExpressJS response object
   * @param {Function} next ExpressJS callback for next middleware
   */
  errorAction (err, req, res, next) {
    this.response.use(res).error(err)
  }
}

module.exports = ErrorCtrl
