var express = require('express');
var controller = require("../controllers/account-edit");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET account-edit page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;