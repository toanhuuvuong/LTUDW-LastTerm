var adminQueries = require('../models/admin-queries');
var bcrypt = require('bcryptjs');

var LocalStrategy = require('passport-local').Strategy;
var ObjectId = require("mongodb").ObjectId;

module.exports = function(passport)
{
  passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done)
  {
    adminQueries.getListAdminByQuery({ email: email }, function(admins)
    {
      var admin = admins[0];
      
      if(!admin) 
      {
        return done(null, false, { message: 'That email is not registered :(' });
      }
      
      bcrypt.compare(password, admin.password, function(err, isMatch)
      {
        if (err) throw err;

        if (isMatch) 
        {
          process.env.ADMIN_NAME = admin.name;

          return done(null, admin);
        } 

        return done(null, false, { message: 'Password incorrect :(' });
      });
    });
  }));

  passport.serializeUser(function(user, done) 
  {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done)
  {
    adminQueries.getListAdminByQuery({ _id: ObjectId(id) }, function(admins)
    {
      done(null, admins[0]);
    });
  });
}
