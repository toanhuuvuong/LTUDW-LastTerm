var express = require('express');
var controller = require("../controllers/product-list");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET product-list page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;