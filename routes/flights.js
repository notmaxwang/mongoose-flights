var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes start with '/flights'

router.get('/', flightsCtrl.index);


router.get('/new', flightsCtrl.new);

// POST /movies

router.post('/flights', flightsCtrl.create)

module.exports = router;
