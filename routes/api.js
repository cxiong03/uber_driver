const express = require('express');
const router = express.Router();
const Driver = require('../models/drivers');

// get a list of drivers form the db
router.get('/', function(req, res, next) {
    res.send({ type: 'GET'});
});

// add a new driver
router.post('/drivers', function(req, res, next) {
    // will create and save new driver to db then wait send back new driver to client
    Driver.create(req.body).then(function(driver){
        res.send(driver);
    })
    .catch(next);
});

// update a driver in the db
router.put('/drivers/:id', function(req, res, next) {
    Driver.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        Driver.findOne({ _id: req.params.id }).then(function(driver) {
            res.send(driver);
        });
    });
});

// delete a driver from the db
router.delete('/drivers/:id', function(req, res, next) {
    Driver.findByIdAndRemove({ _id: req.params.id }).then(function(driver){
        res.send(driver);
    });
});

// exporting the file
module.exports = router;