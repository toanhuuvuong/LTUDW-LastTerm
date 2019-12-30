var express = require('express');
var controller = require("../controllers/index");
var authentication = require("../config/authentication")

var router = express.Router();

/* GET home page. */
router.get('/', authentication.ensureAuthenticated, controller.index);

module.exports = router;