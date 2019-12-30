require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var indexRouter = require('./routes/index');
var accountListRouter = require('./routes/account-list');
var accountEditRouter = require('./routes/account-edit');
var stallListRouter = require('./routes/stall-list');
var stallEditRouter = require('./routes/stall-edit');
var productListRouter = require('./routes/product-list');
var productEditRouter = require('./routes/product-edit');
var top10ProductRouter = require('./routes/top-10-product');
var top10ProductOfShopRouter = require('./routes/top-10-product-of-shop');
var top10ProductOfStallRouter = require('./routes/top-10-product-of-stall');
var orderListRouter = require('./routes/order-list');
var orderEditRouter = require('./routes/order-edit');
var revenueRouter = require('./routes/revenue');
var revenueStatisticsRouter = require('./routes/revenue-statistics');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var registrationRouter = require('./routes/registration');

var app = express();

// passport config
require('./config/passport')(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// express session
app.use(session(
{
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// global variables
app.use(function(req, res, next) 
{
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});

// routers
app.use('/', indexRouter);
app.use('/index.html', indexRouter);
app.use('/account-list.html', accountListRouter);
app.use('/account-edit.html', accountEditRouter);
app.use('/stall-list.html', stallListRouter);
app.use('/stall-edit.html', stallEditRouter);
app.use('/product-list.html', productListRouter);
app.use('/product-edit.html', productEditRouter);
app.use('/top-10-product.html', top10ProductRouter);
app.use('/top-10-product-of-shop.html', top10ProductOfShopRouter);
app.use('/top-10-product-of-stall.html', top10ProductOfStallRouter);
app.use('/order-list.html', orderListRouter);
app.use('/order-edit.html', orderEditRouter);
app.use('/revenue.html', revenueRouter);
app.use('/revenue-statistics.html', revenueStatisticsRouter);
app.use('/login.html', loginRouter);
app.use('/logout.html', logoutRouter);
app.use('/registration.html', registrationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) 
{
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
