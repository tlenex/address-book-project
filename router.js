var express = require('express');
var addressBookController = require('./controllers/addressBookController');

module.exports = function (app, addressBook) {

    var router = new express.Router();
    var controller = addressBookController(app, addressBook);

    router.get('/', controller.getItems);

    return app.use('/', router);
};