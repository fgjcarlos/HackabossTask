// Variables && instances
const express = require('express');
const router = express.Router();

// Controller
const { homePage } = require('../controllers/get/getHome');


router.get('/',(req, res, next) => {

console.log(req.url)

return res.json({info: "In page root" })

});


router.post('/',(req, res, next) => {

console.log(req.url);


return res.json({info: "In page root" })


});

// **** GET  *****
// Root page
// router.get('/', );

module.exports = router;
