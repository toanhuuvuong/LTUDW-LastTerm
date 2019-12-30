var express = require('express');
var controller = require("../controllers/order-edit");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET order-edit page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;