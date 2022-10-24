var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes start with '/flights'

router.get('/new', flightsCtrl.new);

module.exports = router;
