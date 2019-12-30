var express = require('express');
var controller = require("../controllers/top-10-product-of-stall");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET top-10-product-of-stall page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;