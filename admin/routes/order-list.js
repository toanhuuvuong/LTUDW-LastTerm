var express = require('express');
var controller = require("../controllers/order-list");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET order-list page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;