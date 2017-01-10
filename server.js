/**
 * Created by rafal on 10.01.2017.
 */
var AddressBook = require('./AddressBook.js');
var addressBook = new AddressBook();

var Express = require('express');
var app = new Express();
app.use(Express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

var bodyParser = require('body-parser');
app.use(bodyParser());

app.get('/api/all', function (req, res) {
    res.send(addressBook.getElements());
});

app.get('/api/elementId/:elementId', function (req, res) {
    var elemIndex = parseInt(req.params.elementId);
    res.send(addressBook.getElement(elemIndex));
});

app.get('/api/elementName/:elementName', function (req, res) {
    var elemName = req.params.elementName;
    res.send(addressBook.getElements(elemName));
});
/*
 app.post('api/elementName/:elementName', function (reg, res) {
 var elem = req.body;
 addressBook.saveElement(elem);
 res.send(addressBook.getElements());
 });
 */
app.put('/api/elementId/:elementId', function (req, res) {
    res.send(addressBook.saveElement(req.body));
});

app.delete('/api/elementId/:elementId', function (req, res) {
    var elemIndex = parseInt(req.params.elementId);
    addressBook.deteleElement(elemIndex);
    res.send(addressBook.getElements());
});


app.get('*', function (req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(8080, function () {
    var elem = {};
    elem.name = 'Rosa';
    addressBook.saveElement(elem);
    var elem = {};
    elem.name = 'Emdzej';
    addressBook.saveElement(elem);
    var elem = {};
    elem.name = 'Mała Mi';
    addressBook.saveElement(elem);
    console.log('App listening on port 8080!')
});
