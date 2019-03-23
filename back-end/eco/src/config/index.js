const jsYaml = require('js-yaml');
const fs = require('fs');

const config = jsYaml.safeLoad(fs.readFileSync('./src/config/config.yml', 'utf8'));

const getServerPort = () => config.server.port;

module.exports = {
    getServerPort
};