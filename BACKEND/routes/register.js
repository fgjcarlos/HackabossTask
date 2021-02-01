// Variables && instances
const express = require('express');
const router = express.Router();

// Controller
const { register } = require('../controllers/post/postRegister');

// Middelware
const {isValidParams} = require('../middelwares/isValidParamsRegister');
const {isUser} = require('../middelwares/isUser');

// **** GET  *****
// Register
router.post('/',isValidParams,isUser, register);

module.exports = router;
