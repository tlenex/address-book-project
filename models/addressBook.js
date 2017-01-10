var AddressBook = function () {
    this.addressBookElems = [];
    this.counter = 0;
};

AddressBook.prototype.addItem = function (item) {
    item.id = this.counter++;
    var added = this.addressBookElems.push(item);
    return this.addressBookElems[added-1];
};
AddressBook.prototype.updateItem = function (item) {
    var itemToUpdate = this.getItem(item.id);
    return itemToUpdate ? itemToUpdate = item : null;
};
AddressBook.prototype.getItem = function (itemId) {
    var result = this.addressBookElems.filter(function (item) {
        if (item.id === itemId) {
            return item;
        }
    });
    return result.length > 0 ? result[0] : null;
};
AddressBook.prototype.getItems = function () {
    return this.addressBookElems;
};
AddressBook.prototype.getItemsByName = function (itemName) {
    var result = this.addressBookElems.filter(function (item) {
        if (item.name.indexOf(itemName) !== -1) {
            return item;
        }
    });
    return result.length > 0 ? result : [];
};
AddressBook.prototype.deleteItem = function (itemId) {
    var itemToDelete = this.getItem(itemId);
    return itemToDelete ? this.addressBookElems.splice(this.addressBookElems.indexOf(itemToDelete), 1)[0] : null;
};

module.exports = AddressBook;