const getAverage = (...scores) => {
  const sumOfScores = scores.reduce((acumulator, element) => {
    return acumulator += element;
  }, 0);

  const average = sumOfScores / scores.length;

  if (average === 10) {
    return 'Aprovado com Distinção';
  }
  
  return average > 7 ? 'Aprovado' : 'Reprovado';
  
};

console.log(getAverage(10, 10));