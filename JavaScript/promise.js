// At the very top of your file
require('dotenv').config()

// Promises in JavaScript to manage asynchronous operations.

const testPromise = new Promise((resolve, reject) => {
    const result = 5 + 5;
    if (result == 10){
        resolve("Fullfilled");
    }
    else{
        reject("Rejected");
    }
});

// Then is executed when a Promise is full filled and Catch is executed when a Prmoise in failed.
testPromise.then(message => {
    console.log(message);
}).catch(message=> {
    console.log(message);
})

.finally(() => {
    // This Runs once the promise is settled
    isLoading  = false
})


const KEY = process.env.WEATHER_API_KEY
const api_url = "https://api.openweathermap.org/data/2.5/weather?";

const params = new URLSearchParams({
    lat: 12.9716,
    lon: 77.5946,
    appid: KEY
});

fetch(`${api_url}${params}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


// THis is how ASYNC works on PRomise, first A and C happens, then B
async function myFunction(){
    console.log("A")
    const response = await fetch(`${api_url}${params}`)
    console.log(response , "B")

}
myFunction()
console.log("C")


async function myFunction2(){
    try{
        const response = await fetch(`${api_url}${params}`)
        if(!response.ok){
            throw new Error("Error: " + response.status)
        }
        const data = await response.json()
        console.log("Temprature is : ", data.main.temp)
    }
    // error here is just a parameter name — like a function parameter. It holds the Error object that was thrown.
    catch(error){
        console.error(error)
    }
    finally{
        //Runs once the promise is settled
        isLoading = false
    }
}
// error is the Error object that was thrown. Instead of your app crashing, you handle it here.

myFunction2()