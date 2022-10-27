const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};

function create(req, res) {
    const flightId = req.params.id;
    const ticket = req.body;
    ticket.flight = flightId;
    Ticket.create(ticket, function(err, ticket) {
        if (err) return res.redirect(`/flights/${flightId}/tickets/new`);
        res.redirect(`/flights/${flightId}`);
    });
}

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'Add Ticket',
        flightId: req.params.id
    });   
}
