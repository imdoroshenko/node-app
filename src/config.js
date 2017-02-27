const convict = require('convict'),
  fs = require('fs')

// Define a schema
const conf = convict({
  http: {
    port: {
      doc: 'Port to mount http server',
      format: 'port',
      default: 3000,
      env: 'HTTP_PORT'
    },
    ip: {
      doc: 'The IP address to bind.',
      format: 'ipaddress',
      default: '127.0.0.1',
      env: 'IP_ADDRESS',
    }
  },
  CORS: {
    enabled: {
      doc: 'enbale/disable CORS policy',
      format: Boolean,
      default: false,
      env: 'CORS_EBABLED'
    },
    headers: {
      doc: 'CORS headers',
      format: Object,
      default: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
      },
      env: 'CORS_HEADERS'
    }
  },
  log: {
    http_format: {
      doc: 'morgan format for http logs',
      format: String,
      default: ':date[iso] :method :url :status :response-time ms --- :user-agent :remote-addr',
      env: 'LOG_HTTP_FORMAT'
    }
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
})

// Load environment dependent configuration
const env = conf.get('env')
  ;[`${__dirname}/../config/default.json`, `${__dirname}/../config/${env}.json'`]
  .forEach(path => fs.existsSync(path) && conf.loadFile(path))

// Perform validation
conf.validate({strict: true})

module.exports = conf
