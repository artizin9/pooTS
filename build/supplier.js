"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("../src/exercises/person");
class Supplier extends person_1.Person {
    constructor(name, address, phone, valueCredit, valueDivide) {
        super(name, address, phone);
        this.valueCredit = valueCredit;
        this.valueDivide = valueDivide;
    }
    getFunds() {
        return this.valueCredit - this.valueDivide;
    }
}
const suppier = new Supplier("Claudio", "Alto da Boa Vista", "(44) 94464-2434", 50, 10);
console.log(suppier);
console.log(suppier.getFunds());
