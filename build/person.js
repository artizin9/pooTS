"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.getPhone = function () {
        return this.phone;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    return Person;
}());
exports.Person = Person;
var person1 = new Person("Claudio", "Alto da Boa Vista", "(44) 94464-2434");
console.log(person1.getName());
console.log(person1.getAddress());
console.log(person1.getPhone());
console.log(person1);
// Alteração no cara
person1.setName("Pedro");
person1.setAddress("Rua elpídio marques costa");
person1.setPhone("90028922");
console.log(person1);
