class Application {
  constructor () {
    this._packageJSON = require('../../package.json')
  }

  get version () {
    return this._packageJSON.version
  }

  get upTime () {
    return process.uptime() | 0
  }

  static upTime  () {
    return process.uptime() | 0
  }

  get name () {
    return this._packageJSON.name
  }
}

module.exports = Application
