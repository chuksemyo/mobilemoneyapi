const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const corsConfig = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS.POST,PUT')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization')
    next()
}

app.use(corsConfig);
app.get('/', (req, res) => {
    res.json({ "api": "Welcome to mobile money api"}) 
})


const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Application is running on port ${port}.`);
});