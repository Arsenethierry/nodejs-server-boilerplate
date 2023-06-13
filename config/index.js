const bunyan = require('bunyan');
// load package.json
const pjs = require('../package.json');

// get some data info from package.json
const { name, version } = pjs;

// set up logger
const getLogger = (serviceName, serviceVersion, level) => bunyan.createLogger({ name: `${serviceName}:${serviceVersion}`, level });

// Configuration options for different environments

module.exports = {
    development: {
        name,
        version,
        serviceTimeout: 30,
        log: () => getLogger(name, version, 'debug'),
    },
    production: {
        name,
        version,
        serviceTimeout: 30,
        log: () => getLogger(name, version, 'info'),
    },
    test: {
        name,
        version,
        serviceTimeout: 30,
        log: () => getLogger(name, version, 'fatal'),
    },
}