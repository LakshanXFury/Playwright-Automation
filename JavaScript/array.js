let mark = Array(6)
new Array(20, 40, 35, 12, 37, 100)

let marks = [20, 40, 35, 12, 37, 100]
console.log(marks[2])
mark[3] = 14 // Modifying the Array
console.log(marks)
console.log(marks.length) // Length of Array
// Add and element to the End
marks.push(65)
console.log(marks)
// Remove and element in the End
marks.pop()
// Add and element to the Front
marks.unshift(12)
console.log(marks)
// To find the index of an element in the array 
console.log(marks.indexOf(100))
// To check if the element is present or ot
console.log(marks.includes(120))

// Sum of all the elements in the array
var sum = 0

for(i=0; i<marks.length; i++)
{
    sum = sum + marks[i]
}
console.log(sum)

// Filter Method (Used while filtering)
var scores = [12, 13, 14, 15]
let newFilterEvenScores = scores.filter(score=>score % 2 == 0)
console.log("Filter Method",newFilterEvenScores)

// Reduce Method = (Used while accumulating)
let total = marks.reduce((sum,mark)=>sum+mark, 0)
console.log("Reduce Method",total)

// Map Method = (Used to use all array elements)

let mappedarray = newFilterEvenScores.map(score=>score*3)
console.log("Map Method", mappedarray)

// Chaining

var score1 = [12,13,14, 16]

let sumValue = score1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)

// Sorting is applicable to String
console.log("Sorting")
let fruits = ["bananna", "mango", "pomegranate", "apple"]
console.log(fruits.sort())


var score1 = [12,13,19,14,16]
console.log(score1.sort((a,b)=>a-b))  //Fat PI operator