module.exports = 
{
  ensureAuthenticated: function(req, res, next) 
  {
    if (req.isAuthenticated()) 
    {
      process.env.DID_LOGIN = 'TRUE';
      return next();
    }
    req.flash('error_msg', 'Please log in to view that resource :(');
    res.redirect('login.html');
  },
  forwardAuthenticated: function(req, res, next) 
  {
    if (!req.isAuthenticated()) 
    {
      return next();
    }
    process.env.DID_LOGIN = 'TRUE';
    res.redirect('index.html');      
  }
};
