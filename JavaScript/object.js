// Object

let person = {
    firstname: "Tim",
    lastname: "Joe",
    age : 24,
    fullname : function()
    {
        console.log(this.firstname + this.lastname)
    }
}

console.log(person.firstname)
console.log(person.fullname()) // Calling FN

// Importing the class

const Person = require("./class")

let classPerson = new Person("Lakshan", "S")

console.log(classPerson.fullname())