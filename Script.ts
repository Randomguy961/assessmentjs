interface person {
    name:string; 
    age: number;
    getPerson :(name:string, age:number) => string;
}             

class Employee implements person {
    name: string;
    age: number;
    salary:number;
    constructor(salary:number) {
        this.salary = salary;
    }
    getPerson = (name: string, age: number) : string => {
        this.name = name;
        this.age = age;
        return "Employee Name: " + name + ', age: ' + age + ', salary: ' + this.salary; 
    }

}

let employee1: person = new Employee(200000);
console.log(employee1.getPerson('Yogesh', 23)); 

let employee2: person= new Employee(50000);
console.log(employee2.getPerson('Monish', 22));