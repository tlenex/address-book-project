/**
 * Created by rafal on 10.01.2017.
 */
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var AddressBookBusinessLogicModel = require('./models/addressBookBusinessLogic');
var addressBook = new AddressBookBusinessLogicModel();
//temp-start
var elem = {};
elem.name = 'Rosa';
addressBook.saveElement(elem);
elem = {};
elem.name = 'Emik';
addressBook.saveElement(elem);
elem = {};
elem.name = 'Gdereck';
addressBook.saveElement(elem);
//temp-end

var app = express();
app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./router')(app, addressBook);
// console.log(router);
// app.use('/', router);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


