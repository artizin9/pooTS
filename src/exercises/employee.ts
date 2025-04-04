import { Person } from "./person";

export class Employee extends Person {
    private salary: number

    constructor(
        private codeSector: number,
        private baseSalary: number,
        private tax: number,
        name: string,
        address: string,
        phone: string,
    ){
        super(name, address, phone)
        this.salary = this.calculateSalary()
    }

    getCodeSector(): number{
        return this.codeSector
    }

    getBaseSalary(): number {
        return this.baseSalary
    }

    getTax(): number {
        return this.tax
    }

    getSalary(): number {
        return this.salary
    }

    setCodeSector(codeSector: number){
        this.codeSector = codeSector
    }

    setBaseSalary(baseSalary: number){
        this.baseSalary = baseSalary
        this.salary = this.calculateSalary()
    }

    setTax(tax: number){
        this.tax = tax
        this.salary = this.calculateSalary()
    }
    
    calculateSalary(): number {
        return this.baseSalary - (this.baseSalary * this.tax)
    }
}


const person1 = new Employee(10, 2000, 0.2, "claudio", "alto da boa vista", "8888888")
const salary = person1.getSalary()

console.log(salary)

