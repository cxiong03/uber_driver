const mongoose = require('mongoose'); // allows us to create our Models and Schemas easily
const Schema = mongoose.Schema;

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
    }
    // add in geo location
});

// pass our collection through our database via the Driver model
const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;