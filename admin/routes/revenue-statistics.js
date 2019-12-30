var express = require('express');
var controller = require("../controllers/revenue-statistics");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET revenue-statistics page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;