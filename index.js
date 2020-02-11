const express = require('express');
// set up express app
const app = express();

// start the root with api && use api.js from routes
// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Listening for requests');
});