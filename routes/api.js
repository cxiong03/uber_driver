const express = require('express');
const router = express.Router();
const Driver = require('../models/drivers');

// get a list of drivers form the db
router.get('/', function(req, res) {
    res.send({ type: 'GET'});
});

// add a new driver
router.post('/drivers', function(req, res) {
    // will create and save new driver to db then wait send back new driver to client
    Driver.create(req.body).then(function(driver){
        res.send(driver);
    });
});

// update a driver in the db
router.put('/drivers/:id', function(req, res) {
    res.send({ type: 'PUT' });
});

// delete a driver from the db
router.delete('/drivers/:id', function(req, res) {
    res.send({ type: 'DELETE' });
});

// exporting the file
module.exports = router;