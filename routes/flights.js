var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes start with '/flights'

router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show)

router.post('/', flightsCtrl.create)

module.exports = router;
