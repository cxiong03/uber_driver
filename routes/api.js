const express = require('express');
const router = express.Router();

// get a list of drivers form the db
router.get('/drivers', function(req, res) {
    res.send({ type: 'GET' });
});

// add a new driver
router.post('/drivers', function(req, res) {
    console.log(req.body);
    res.send({ 
        type: 'POST',
        name: req.body.name,
        rate: req.body.rate
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