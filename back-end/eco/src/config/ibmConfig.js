const fs = require('fs')
const dotenv = require('dotenv')
const config = dotenv.parse(fs.readFileSync('./src/config/ibm-credentials.env'));

module.exports = config;