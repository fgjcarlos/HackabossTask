// Variables && instances
const express = require('express');
const router = express.Router();

// Controller
const { login } = require('../controllers/post/postLogin');

// Middelware
const {isRigthUser} = require('../middelwares/isRigthUser');
const{isValidParams} = require('../middelwares/isValidParamsLogin');

// **** POST *****
router.post('/',isValidParams,isRigthUser, login);

module.exports = router;
