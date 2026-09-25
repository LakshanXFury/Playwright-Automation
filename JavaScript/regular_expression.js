const text = "plAyWright@12#3"


const string = (text.match(/[A-Za-z]/g)|| []).length
const number = (text.match(/\d/g)|| []).length
const special_char = (text.match(/[^A-Za-z0-9]/g)|| []).length


console.log(string)
console.log(number)
console.log(special_char)