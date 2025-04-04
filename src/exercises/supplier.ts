import { Person } from "./person"

class Supplier extends Person {
    constructor(
        name: string,
        address: string,
        phone: string,
        private valueCredit: number,
        private valueDivide: number
    ){ 
        super(name, address, phone) 
    }
    
    getFunds():number {
        return this.valueCredit - this.valueDivide
    }
}

const suppier = new Supplier("Claudio", "Alto da Boa Vista", "(44) 94464-2434", 50, 10)
console.log(suppier)
console.log(suppier.getFunds())
