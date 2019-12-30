var express = require('express');
var controller = require("../controllers/top-10-product-of-shop");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET top-10-product-of-shop page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;