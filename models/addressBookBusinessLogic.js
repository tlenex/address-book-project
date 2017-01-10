/**
 * Created by rafal on 04.01.2017.
 */

var AddressBook = require('./addressBook.js');

var AddressBookBusinessLogic = function () {
    this.addressBook = new AddressBook();

};

AddressBookBusinessLogic.prototype.saveElement = function (elem) {
    if (typeof(elem.id) !== 'undefined') {
        if (typeof(elem.id) === 'number' && elem.id >= 0 && this.addressBook.getItem(elem.id) !== null) {
            return this.addressBook.updateItem(elem);
        }
        else {
            return null;
        }
    }
    else {
        if (typeof(elem.name) !== 'undefined' && elem.name.length > 0) {
            return this.addressBook.addItem(elem);
        }
        else {
            return null;
        }
    }
};
AddressBookBusinessLogic.prototype.getElement = function (elemId) {
    if (typeof(elemId) === 'number' && elemId >= 0) {
        return this.addressBook.getItem(elemId);
    }
    return null;
};
AddressBookBusinessLogic.prototype.getElements = function (elemName) {
    if (typeof(elemName) === "string" && elemName.length > 0) {
        return this.addressBook.getItemsByName(elemName);
    }
    else {
        return this.addressBook.getItems();
    }
};
AddressBookBusinessLogic.prototype.deteleElement = function (elemId) {
    if (typeof(elemId) !== 'undefined' && typeof(elemId) === 'number' && elemId >= 0 && this.addressBook.getItem(elemId) !== null) {
        return this.addressBook.deleteItem(elemId);
    }
    return null;
};

module.exports = AddressBookBusinessLogic;
