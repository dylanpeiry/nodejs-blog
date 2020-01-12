var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var exphbs = require('express-handlebars');

var indexRouter = require('./routes');
var postsRouter = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
exphbs.ExpressHandlebars.prototype.layoutsDir = 'views/';

app.engine('.hbs', exphbs({
        extname: '.hbs',
        helpers: require('./config/hbs-helpers').helpers
    }
));

exphbs.ExpressHandlebars.prototype.layoutsDir = 'views/';
app.set('view engine', 'hbs');

app.use(session({secret: 'blog', cookie: {maxAge: 60000}}));
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
