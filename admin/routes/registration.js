var express = require('express');
var controller = require("../controllers/registration.js");
var authentication = require('../config/authentication');

var router = express.Router();

/* GET registration page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

/* POST registration page. */
router.post('/', controller.indexPost);

module.exports = router;