const validadeDate = date => {
  return date instanceof Date && !isNaN(date);
};

const x = "teste";
const y = new Date();
const z = Date('06.12.2022');
console.log(validadeDate(x)); // false
console.log(validadeDate(y)); // true
console.log(validadeDate(z)); // false, pois não é uma instancia de date
console.log(y);
console.log(z);