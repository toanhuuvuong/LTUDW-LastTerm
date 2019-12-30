var adminQueries = require('../models/admin-queries');
var bcrypt = require('bcryptjs');

module.exports =
{
	index: function(req, res, next)
	{
		res.render('registration');
	},
	indexPost: function(req, res, next) 
	{
		var { name, email, password1, password2 } = req.body;

		var errors = [];

		if(!name || !email || !password1 || !password2)
		{
			errors.push('You forget some fields :(');
		}
		if(password1 != password2)
		{
			errors.push('Your password do not match :(');
		}
		if(password1.length <= 6)
		{
			errors.push('Your password must be at least 7 characters :(');
		}

		if(errors.length > 0)
		{
			res.render('registration', 
			{
				errors: errors,
				values: req.body
			});
		}
		else
		{
			adminQueries.getListAdminByQuery({ email: email }, function(admins)
			{
				var admin = admins[0];

				if(admin)
				{
					errors.push('Email already exists :(');
			    res.render('registration', 
					{
						errors: errors,
						values: req.body
					});
				}
				else
				{
					var newAdmin = 
					{
						name: name,
						email: email,
						password: password1
					}

					bcrypt.genSalt(10, function(err, salt)
					{
		        bcrypt.hash(newAdmin.password, salt, function(err, hash)
		        {
	            if (err) throw err;

	            newAdmin.password = hash;

	            adminQueries.insertAdmin(newAdmin, function(result)
	            {
	            	req.flash('success_msg', 'You are now registered and can log in :)');

	              res.redirect('registration.html');
	            });
		        });
			  	});
				}
			});
		}
	}
};