const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// @route   GET api/authors
// @desc    Get all authors
// @access  Public
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
