// Variables && instances
const express = require('express');
const router = express.Router();

// Controller
const { register } = require('../controllers/post/postRegister');

// Middelware

// **** GET  *****
// Home page
router.post('/', register);

module.exports = router;