const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// POST create trip
router.post('/', tripController.createTrip);

// GET list trips (pagination + search)
router.get('/', tripController.getTrips);

// GET single trip
router.get('/:id', tripController.getTripById);

// PUT update trip
router.put('/:id', tripController.updateTrip);

// DELETE trip
router.delete('/:id', tripController.deleteTrip);

module.exports = router;
