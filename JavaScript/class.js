class Person
{
    // Constructor is a method which executes by default when you create an object of the class
    constructor(firstname, lastname)
    {
        this.firstname = firstname
        this.lastname = lastname
    }

    // Methods
    fullname()
    {
        console.log(this.firstname + " " + this.lastname)
    }

    // Class properties
    age = 25
    get location()
    {
        return "Canada"
    }
}

// Accessing the property of a class by creating an object
let person = new Person("Cristiano", "Ronaldo")
console.log(person.age)
console.log(person.location)

console.log(person.fullname())

// To Export the class --- For multiple classes if ur exporting u can use {Person, Person1} braces
module.exports = Person; 