const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true 
})); // support encoded bodies

const config = require('./src/config');

const PORT = config.getServerPort();

app.get('/', (req, res) => res.send("hello_world"));

app.post('/predict', async (req, res) => {

    const { url } = req.body;

    const config = {
        headers: {
            'Prediction-Key': 'a033f1bc912a4c4b8e30a13154ad27d0',
            "Content-Type": "application/json"
        }
    };

    const response = await axios.post('****', { url }, config);

    res.send(JSON.stringify(response));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

