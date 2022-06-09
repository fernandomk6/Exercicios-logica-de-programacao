const opposites = (...numbers) => {
  const biggest = Math.min(...numbers);
  const smallest =  Math.max(...numbers);

  return {biggest, smallest};
}

console.log(opposites(1,2,3,6,5,6));