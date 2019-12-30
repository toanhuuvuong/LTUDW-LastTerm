var express = require('express');
var controller = require("../controllers/top-10-product");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET top-10-product page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;