// Promise 1: Resolves with the number 42
const getAnswer = new Promise((resolve) => {
  resolve(42);
});

// Promise 2: Resolves with the number 100 after 1 second
const getScore = new Promise((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 1000);
});




async function calculate(promise1, promise2) {
    const result = await Promise.all([promise1, promise2])
    .then(([val1, val2]) => val1 + val2)

    console.log(result)
}

calculate(getAnswer, getScore)

// addTwoPromises called
//         │
//         ▼
// Promise.all starts watching both
//         │
//    ┌────┴────┐
//    p1        p2
//   20ms      60ms
//    │         │
//    2         5
//    └────┬────┘
//         │
//       [2, 5]
//         │
//         ▼
//    .then runs
//    2 + 5 = 7
//         │
//         ▼
//    result = 7
//         │
//         ▼
//    return 7 ✅