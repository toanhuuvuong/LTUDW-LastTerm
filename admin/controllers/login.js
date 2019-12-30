var passport = require('passport');

module.exports =
{
	index: function(req, res, next)
	{
		res.render('login');
	},
	indexPost: function(req, res, next)
	{
		passport.authenticate('local', 
		{
		    successRedirect: 'index.html',
		    failureRedirect: 'login.html',
		    failureFlash: true
	  	})(req, res, next);
	}
};
