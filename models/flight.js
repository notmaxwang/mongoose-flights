const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SFO']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'United', 'Delta', 'Southwest', 'Frontier']
    },
    airport: {
        type: String,
        required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SFO'],
        default: 'SFO'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 1,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now()
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);