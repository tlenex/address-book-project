/**
 * Created by rafal on 10.01.2017.
 */
var addressBookBusinessLogic = require('../models/addressBookBusinessLogic');

module.exports = {
    getItems: function (req, res, next) {
        res.send(addressBookBusinessLogic.getElements());
    }
}

