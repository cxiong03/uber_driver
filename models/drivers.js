const mongoose = require('mongoose'); // allows us to create our Models and Schemas easily
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema ({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type:[ Number ],
        index: '2dsphere'
    }
});

// create driver Schema & model
const DriverSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    rate: {
        type: String
    },

    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema

});

// pass our collection through our database via the Driver model
const Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;