const desc = (...numbers) => {
  numbers = numbers.filter(element => {
    return typeof element === 'number';
  });

  return numbers.sort((a, b) => b - a)
};
console.log(desc(1,2,3,0,36636,32,35,64,66, 'a'));