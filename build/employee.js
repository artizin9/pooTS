"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("../src/exercises/person");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(codeSector, baseSalary, tax, name, address, phone) {
        var _this = _super.call(this, name, address, phone) || this;
        _this.codeSector = codeSector;
        _this.baseSalary = baseSalary;
        _this.tax = tax;
        _this.salary = _this.baseSalary - (_this.baseSalary * _this.tax);
        return _this;
    }
    Employee.prototype.getCodeSector = function () {
        return this.codeSector;
    };
    Employee.prototype.getBaseSalary = function () {
        return this.baseSalary;
    };
    Employee.prototype.getTax = function () {
        return this.tax;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setCodeSector = function (codeSector) {
        this.codeSector = codeSector;
    };
    Employee.prototype.setBaseSalary = function (baseSalary) {
        this.baseSalary = baseSalary;
        this.salary = this.baseSalary - (this.baseSalary * this.tax);
    };
    Employee.prototype.setTax = function (tax) {
        this.tax = tax;
        this.salary = this.baseSalary - (this.baseSalary * this.tax);
    };
    return Employee;
}(person_1.Person));
var person1 = new Employee(10, 2000, 0.2, "claudio", "alto da boa vista", "8888888");
var salary = person1.getSalary();
console.log(person1, salary);
