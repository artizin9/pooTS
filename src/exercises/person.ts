export class Person {
    constructor(
        private name: string,
        private address: string,
        private phone: string,
    ){}


    getName(): string{
        return this.name
    }
    getAddress(): string{
        return this.address
    }
    getPhone(): string{
        return this.phone
    }

    setName(name: string): void{
        this.name = name
    }
    setAddress(address: string): void{
        this.address = address
    }
    setPhone(phone: string): void{
        this.phone = phone
    }
}

const person1 = new Person("Claudio", "Alto da Boa Vista", "(44) 94464-2434")
console.log(person1.getName())
console.log(person1.getAddress())
console.log(person1.getPhone())
console.log(person1)

// Alteração no cara
person1.setName("Pedro")
person1.setAddress("Rua elpídio marques costa")
person1.setPhone("90028922")
console.log(person1)