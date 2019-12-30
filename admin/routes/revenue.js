var express = require('express');
var controller = require("../controllers/revenue");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET revenue page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;