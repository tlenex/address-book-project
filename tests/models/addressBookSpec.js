/**
 * Created by rafal on 10.01.2017.
 */
var Module = require('../../models/addressBook.js');

describe("Given a new address book module", function () {
    beforeEach(function () {
        this.instance = new Module();
    });
    describe("when adding item", function () {
        beforeEach(function () {
            this.item = {};
            this.result = this.instance.addItem(this.item);
        });
        it("should return added item", function () {
            expect(this.result).toBe(this.item);
        });
    });
    describe("when proper update item", function () {
        beforeEach(function () {
            this.item = {};
            this.instance.addItem(this.item);
            this.item.name = "Rosa";
            this.result = this.instance.updateItem(this.item);
        });
        it("should return updated item", function () {
            expect(this.result).toBe(this.item);
        });
    });
    describe("when invalid update item", function () {
        beforeEach(function () {
            this.item = {};
            this.instance.addItem(this.item);
            this.item.name = "Rosa";
            //simulate element with wrong id
            var item = {};
            item.id = 2;
            this.result = this.instance.updateItem(item);
        });
        it("should return updated item", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when geting existing item", function () {
        beforeEach(function () {
            this.item = {};
            this.instance.addItem(this.item);
            this.result = this.instance.getItem(0);
        });
        it("should return item", function () {
            expect(this.result).toBe(this.item);
        });
    });
    describe("when geting non-existing item", function () {
        beforeEach(function () {
            this.item = {};
            this.instance.addItem(this.item);
            this.result = this.instance.getItem(1);
        });
        it("should return item", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when geting existing items", function () {
        beforeEach(function () {
            this.testArray = [];
            this.item = {};
            this.item.name = 'Rosa';
            this.instance.addItem(this.item);
            this.testArray.push(this.item);
            this.item = {};
            this.item.name = 'Rosa1';
            this.instance.addItem(this.item);
            this.testArray.push(this.item);
            this.item = {};
            this.item.name = 'Rosa2';
            this.instance.addItem(this.item);
            this.testArray.push(this.item);

            this.result = this.instance.getItems();
        });
        it("should return items", function () {
            expect(this.result).toEqual(this.testArray);
        });
    });
    describe("when geting non-existing items", function () {
        beforeEach(function () {
            this.testArray = [];

            this.result = this.instance.getItems();
        });
        it("should return item", function () {
            expect(this.result).toEqual(this.testArray);
        });
    });
    describe("when geting existing items by name", function () {
        beforeEach(function () {
            this.testArray = [];
            this.item = {};
            this.item.name = 'Rosa';
            this.instance.addItem(this.item);
            this.testArray.push(this.item);
            this.item = {};
            this.item.name = 'Gabriel';
            this.instance.addItem(this.item);
            this.item = {};
            this.item.name = 'Rosa2';
            this.instance.addItem(this.item);
            this.testArray.push(this.item);

            this.result = this.instance.getItemsByName('Rosa');
        });
        it("should return proper items", function () {
            expect(this.result).toEqual(this.testArray);
        });
    });
    describe("when geting non-existing items by name", function () {
        beforeEach(function () {
            this.testArray = [];
            this.item = {};
            this.item.name = 'Rosa';
            this.instance.addItem(this.item);
            this.item = {};
            this.item.name = 'Gabriel';
            this.instance.addItem(this.item);
            this.item = {};
            this.item.name = 'Rosa2';
            this.instance.addItem(this.item);

            this.result = this.instance.getItemsByName('Jakub');
        });
        it("should return proper items", function () {
            expect(this.result).toEqual(this.testArray);
        });
    });
    describe("when deleting existing item", function () {
        beforeEach(function () {
            this.item = {};
            this.instance.addItem(this.item);
            this.result = this.instance.deleteItem(0);
        });
        it("should return deleted item", function () {
            expect(this.result).toBe(this.item);
        });
    });
    describe("when deleting non-existing item", function () {
        beforeEach(function () {
            this.item = {};
            this.instance.addItem(this.item);
            this.result = this.instance.deleteItem(1);
        });
        it("should return deleted item", function () {
            expect(this.result).toBeNull();
        });
    });
});
