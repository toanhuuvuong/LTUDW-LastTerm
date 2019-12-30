var express = require('express');
var controller = require("../controllers/account-list");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET account-list page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;