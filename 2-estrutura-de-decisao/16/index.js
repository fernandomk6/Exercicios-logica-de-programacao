const solveEquation = (a, b, c) => {
  const delta = b**2 - 4 * a * c;

  if (a === 0 || delta < 0) {
    return;
  }

  const positiveSquareRoot = ((-(b) + Math.sqrt(delta)) / 2 * a);
  const negativeSquareRoot = ((-(b) - Math.sqrt(delta)) / 2 * a);

  return {negativeSquareRoot, positiveSquareRoot};
};

console.log(solveEquation(1,-5,6));