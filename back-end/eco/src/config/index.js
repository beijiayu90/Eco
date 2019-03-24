const jsYaml = require('js-yaml');
const fs = require('fs');

const ibmConfig = require('./ibmConfig');

const config = jsYaml.safeLoad(fs.readFileSync('./src/config/config.yml', 'utf8'));

const getServerPort = () => config.server.port;

const getIBMAPIKey = () => ibmConfig.VISUAL_RECOGNITION_APIKEY;
const getIBMUrl = () => ibmConfig.VISUAL_RECOGNITION_URL;

module.exports = {
    getServerPort,
    getIBMAPIKey,
    getIBMUrl
};