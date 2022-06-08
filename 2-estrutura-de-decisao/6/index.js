const theBiggest = (...numbers) => numbers.sort((a, b) => b - a)[0];

console.log(theBiggest(1, 2, 9, 9, 5, 6));