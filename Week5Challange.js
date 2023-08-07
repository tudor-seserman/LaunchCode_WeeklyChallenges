class Person{
  name;
  age;

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  compareAge(Person){
    let comparison = "the same age as me";
    if(Person.age>this.age){
      comparison = "older than";
    }else if(Person.age<this.age){
      comparison = "younger than ";
    }

    return `${Person.name} is ${comparison} me. `
  }

}

let p1 =new Person("Samuel", 24)
let p2 =new Person("Joel", 36)
let p3 =new Person("Lily", 24)

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));