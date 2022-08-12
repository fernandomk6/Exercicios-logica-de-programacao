const isInteger = aNumber => aNumber % 1 === 0;

console.log(isInteger(1));
console.log(isInteger(2));
console.log(isInteger(2.6));
console.log(isInteger(""));
console.log(isInteger([]));