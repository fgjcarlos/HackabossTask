// Variables && instances
const express = require('express');
const router = express.Router();

// Controller
const { register } = require('../controllers/post/postRegister');

// Middelware
const {isValidParams} = require('../middelwares/isValidParamsRegister');
const {isUser} = require('../middelwares/isUser');
//TODO comprobar por email q el usuario no exixte

// **** GET  *****
// Register
router.post('/',isValidParams,isUser, register);

module.exports = router;
