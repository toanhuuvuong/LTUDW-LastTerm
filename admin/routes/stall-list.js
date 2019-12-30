var express = require('express');
var controller = require("../controllers/stall-list");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET stall-list page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;