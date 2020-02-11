const express = require('express');
const bodyParser = require('body-parser');
// set up express app
const app = express();

//   pass req object through this middleware
app.use(bodyParser.json());

// start the root with api && use api.js from routes
// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Listening for requests');
});