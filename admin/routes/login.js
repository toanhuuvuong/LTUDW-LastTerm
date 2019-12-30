var express = require('express');
var controller = require("../controllers/login.js");
var forwardAuthenticated = require('../config/authentication').forwardAuthenticated;

var router = express.Router();

/* GET login page. */
router.get('/', forwardAuthenticated, controller.index);

/* POST login page. */
router.post('/', controller.indexPost);

module.exports = router;