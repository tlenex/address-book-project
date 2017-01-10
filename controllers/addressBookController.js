/**
 * Created by rafal on 10.01.2017.
 */


module.exports = function (app, addressBook) {
    var addressBookBusinessLogic = require('../models/addressBookBusinessLogic');
    var logic = new addressBookBusinessLogic(addressBook);

    // console.log(addressBook);
    // console.log(logic);

    return {
        getItems: function (req, res, next) {
            res.json(logic.getElements());
        }
    }
};
