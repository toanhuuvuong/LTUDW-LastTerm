var express = require('express');

var router = express.Router();

router.get('/', function(req, res) 
{
	process.env.DID_LOGIN = 'FALSE';
	req.logout();
	req.flash('success_msg', 'You are logged out :)');
	res.redirect('login.html');
});

module.exports = router;