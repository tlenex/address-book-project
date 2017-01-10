/**
 * Created by rafal on 10.01.2017.
 */
var Module = require('../AddressBookBusinessLogic.js');

describe("Given a new address book module", function () {
    beforeEach(function () {
        this.instance = new Module();
    });
    describe("when saving element without name", function () {
        beforeEach(function () {
            var elem = {};
            this.result = this.instance.saveElement(elem);
        });
        it("should return null", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when saving element with empty name", function () {
        beforeEach(function () {
            var elem = {};
            elem.name = '';
            this.result = this.instance.saveElement(elem);
        });
        it("should return null", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when adding proper element", function () {
        beforeEach(function () {
            this.elem = {};
            this.elem.name = 'Rosa';
            this.result = this.instance.saveElement(this.elem);
        });
        it("should return created element", function () {
            expect(this.result).toBe(this.elem);
        });
    });
    describe("when updating element without id", function () {
        beforeEach(function () {
            var elem = {};
            elem.name = 'Rosa';
            this.result = this.instance.saveElement(elem);
            //simulate element with wrong id
            this.elem = {};
            this.elem.name = 'Gabriel';
            this.result = this.instance.saveElement(this.elem);
        });
        it("should return new added element", function () {
            expect(this.result).toBe(this.elem);
        });
    });
    describe("when updating element with not-number id", function () {
        beforeEach(function () {
            var elem = {};
            elem.name = 'Rosa';
            this.result = this.instance.saveElement(elem);
            //simulate element with wrong id
            this.elem = {};
            this.elem.id = 'est';
            this.elem.name = 'Gabriel';
            this.result = this.instance.saveElement(this.elem);
        });
        it("should return null", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when updating element with negative id", function () {
        beforeEach(function () {
            var elem = {};
            elem.name = 'Rosa';
            this.result = this.instance.saveElement(elem);
            //simulate element with wrong id
            this.elem = {};
            this.elem.id = -1;
            this.elem.name = 'Gabriel';
            this.result = this.instance.saveElement(this.elem);
        });
        it("should return null", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when updating element with wrong id", function () {
        beforeEach(function () {
            var elem = {};
            elem.name = 'Rosa';
            this.result = this.instance.saveElement(elem);
            //simulate element with wrong id
            this.elem = {};
            this.elem.id = 3;
            this.elem.name = 'Gabriel';
            this.result = this.instance.saveElement(this.elem);
        });
        it("should return null", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when updating proper element", function () {
        beforeEach(function () {
            this.elem = {};
            this.elem.name = 'Gabriel';
            this.instance.saveElement(this.elem);
            this.elem.name = 'Rosa';
            this.result = this.instance.saveElement(this.elem);
        });
        it("should return updated element", function () {
            expect(this.result).toBe(this.elem);
        });
    });
    describe("when getting for non-number index element", function () {
        beforeEach(function () {
            var elemIndex = 'rosa';
            this.result = this.instance.getElement(elemIndex);
        });
        it("should return null", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when getting for negative index element", function () {
        beforeEach(function () {
            var elemIndex = -1;
            this.result = this.instance.getElement(elemIndex);
        });
        it("should return null", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when getting for nonexisting element", function () {
        beforeEach(function () {
            var elemIndex = 7;
            this.result = this.instance.getElement(elemIndex);
        });
        it("should return null", function () {
            expect(this.result).toBeNull();
        });
    });
    describe("when getting for existing element", function () {
        beforeEach(function () {
            this.elem = {};
            this.elem.name = 'Gabriel Rosa';
            this.addResult = this.instance.saveElement(this.elem);
            this.result = this.instance.getElement(this.addResult.id);
        });
        it("should return existing element", function () {
            expect(this.result).toBe(this.addResult);
        });
    });
    describe("when getting elements where there is no elements", function () {
        beforeEach(function () {
            this.getAllResult = this.instance.getElements();
        });
        it("should return empty array", function () {
            expect(this.getAllResult).toEqual([]);
        });
    });
    describe("when getting elements by part of name where parameter is number", function () {
        beforeEach(function () {
            this.getAllResult = this.instance.getElements(7);
        });
        it("should return empty array", function () {
            expect(this.getAllResult).toEqual([]);
        });
    });
    describe("when getting elements by part of name where parameter is empty string", function () {
        beforeEach(function () {
            this.testArray = [
                this.instance.saveElement({name: 'Rafał'}),
                this.instance.saveElement({name: 'Roman'}),
                this.instance.saveElement({name: 'Stefan'})];
            this.getAllResult = this.instance.getElements('');
        });
        it("should return list of elements", function () {
            expect(this.getAllResult).toEqual(this.testArray);
        });
    });
    describe("when getting elements", function () {
        beforeEach(function () {
            this.testArray = [
                this.instance.saveElement({name: 'Rafał'}),
                this.instance.saveElement({name: 'Roman'}),
                this.instance.saveElement({name: 'Stefan'})];
            this.getAllResult = this.instance.getElements();
        });
        it("should return list of elements", function () {
            expect(this.testArray).toEqual(this.getAllResult);
        });
    });
    describe("when getting elements by part of name where there is no matching elements", function () {
        beforeEach(function () {
            this.testArray = [];
            this.instance.saveElement({name: 'Rafał'});
            this.instance.saveElement({name: 'Stefan'});
            this.instance.saveElement({name: 'Roman'});
            this.getAllResult = this.instance.getElements('misio');
        });
        it("should return empty array", function () {
            expect(this.testArray).toEqual(this.getAllResult);
        });
    });
    describe("when getting elements by part of name where there is matching elements", function () {
        beforeEach(function () {
            this.testArray = [
                this.instance.saveElement({name: 'Rafał'}),
                this.instance.saveElement({name: 'Stefan'})];
            this.instance.saveElement({name: 'Roman'})
            this.getAllResult = this.instance.getElements('fa');
        });
        it("should return list of two elements", function () {
            expect(this.testArray).toEqual(this.getAllResult);
        });
    });
    describe("when deleting element without passing id", function () {
        beforeEach(function () {
            this.deleteResult = this.instance.deteleElement();
        });
        it("should return null", function () {
            expect(this.deleteResult).toBeNull();
        });
    });
    describe("when deleting element with not-number id", function () {
        beforeEach(function () {
            this.deleteResult = this.instance.deteleElement('a');
        });
        it("should return null", function () {
            expect(this.deleteResult).toBeNull();
        });
    });
    describe("when deleting element with negative id", function () {
        beforeEach(function () {
            this.deleteResult = this.instance.deteleElement(-1);
        });
        it("should return null", function () {
            expect(this.deleteResult).toBeNull();
        });
    });
    describe("when deleting element with wrong id", function () {
        beforeEach(function () {
            this.deleteResult = this.instance.deteleElement(2);
        });
        it("should return null", function () {
            expect(this.deleteResult).toBeNull();
        });
    });
    describe("when deleting existing element", function () {
        beforeEach(function () {
            this.elem = {};
            this.elem.name = 'Rosa';
            this.addResult = this.instance.saveElement(this.elem);
            this.deleteResult = this.instance.deteleElement(0);
        });
        it("should return deleted element", function () {
            expect(this.elem).toEqual(this.addResult);
        });
    });
});
