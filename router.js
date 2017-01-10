var express = require('express');
var addressBookController = require('./controllers/addressBookController');

module.exports = function (addressBook) {
    var router = express.Router();
    router.get('/', addressBookController.getItems);
    return router;
};