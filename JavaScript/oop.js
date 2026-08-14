const Person = require("./class") // This achieves inheritance

// Inheritance
class Pet extends Person
{
    // Override the method from parent class
    get location()
    {
        return "BlueCross"
    }
    constructor(firstname, lastname)
    {
        // To call parent class constructor
        super(firstname, lastname)
    }

}
let pet = new Pet("Fury", "Bhai")
pet.fullname()
console.log(pet.location)