const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb and to driver database
mongoose.connect('mongodb+srv://User:welcome123@cluster0-arb54.mongodb.net/Profile?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MongoDb...');
});
mongoose.Promise = global.Promise; // overriding deprecation
const db = mongoose.connection;

//   pass req object through this middleware
app.use(bodyParser.json());

// start the root with api && use api.js from routes
// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Listening for requests');
});