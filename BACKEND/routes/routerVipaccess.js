// Variables && instances
const express = require('express');
const router = express.Router();

// Controller
const { vipInfo } = require('../controllers/get/getVipInfo');
 const { vipInfoByType } = require('../controllers/get/getVipInfoByType');

// Middelware
// const {isAuthenticated} = require('../middelwares/auth.js');

// **** GET *****
// All info
router.get('/',vipInfo );
// Whith query
router.get('/:type', vipInfoByType )

module.exports = router;
