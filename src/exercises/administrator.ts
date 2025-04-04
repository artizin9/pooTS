import { Employee } from "./employee";

class Administrator extends Employee {
    constructor(
        codeSector: number,
        baseSalary: number,
        tax: number,
        name: string,
        address: string,
        phone: string,
        private helpCost: number
    ){
        super(codeSector, baseSalary, tax, name, address, phone)
    }

    getHelpCost(): number {
        return this.helpCost
    }

    setHelpCost(helpCost: number){
        this.helpCost = helpCost
    }

    calculateSalary(): number {
        return super.calculateSalary() + this.helpCost
    }
}

const adm1 = new Administrator(10, 2000, 0.2, "claudio", "alto da boa vista", "8888888", 200)
const salaryAdm = adm1.calculateSalary()

console.log(salaryAdm)