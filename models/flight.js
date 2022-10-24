const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'United', 'Delta', 'Southwest', 'Frontier']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SFO'],
        default: 'SFO'
    },
    flightNo: Number,
    departs: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);