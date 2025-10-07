// routes/closing.js
const express = require('express');
const router = express.Router();
const Closing = require('../models/closing');

// Add new Closing Sheet
router.post('/post', async (req, res) => {
  try {
    const closing = new Closing(req.body);
    await closing.save();
    res.status(201).json({ message: 'Closing sheet saved successfully', closing });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all Closing Sheets
router.get('/get', async (req, res) => {
  try {
    const closings = await Closing.find().sort({ createdAt: -1 });
    res.json(closings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
