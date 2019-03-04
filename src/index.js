require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const http = require('http').Server(app)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send({ 'message': 'OK' })
});

require('./socket/index')(http)

http.listen(port, () => {
    console.log(`APP Listen on port ${port}`)
});