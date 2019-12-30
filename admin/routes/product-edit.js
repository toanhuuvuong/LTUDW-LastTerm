var express = require('express');
var controller = require("../controllers/product-edit");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET product-edit page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;