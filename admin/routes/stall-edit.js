var express = require('express');
var controller = require("../controllers/stall-edit");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET stall-edit page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;