const should = require('should'),
  appService = require('../../src/services/application')

describe('Application', () => {
  const
    appService = new (require('../../src/services/application'))(),
    packageJSON = require('../../package.json')

  describe('#name', () => {
    it('should be equal to #name in package.json and be String', () => {
      should(appService.name).be.equal(packageJSON.name).and.be.String()
    })
  })
  describe('#upTime', () => {
    it('should be Number', () => {
      should(appService.upTime).be.Number()
    })
  })
  describe('#version', () => {
    it('should be equal to version in package.json and be String', () => {
      should(appService.version).be.equal(packageJSON.version).and.be.String()
    })
  })
})
