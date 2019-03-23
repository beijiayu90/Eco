const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true 
})); // support encoded bodies

const config = require('./src/config');

const PORT = config.getServerPort();

app.get('/', (req, res) => res.send("hello_world"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

