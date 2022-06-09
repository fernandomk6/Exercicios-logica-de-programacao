const verifyScore = (...scores) => {
  const average = 
  scores.reduce((accumulator, element) => 
  accumulator += element, 0) / scores.length;
  
  let concept;
  let message;

  if (average >= 9 && average <= 10) {
    concept = 'A';
  } else if (average >= 7.5 && average < 9) {
    concept = 'B';
  } else if (average >= 6 && average < 7.5) {
    concept = 'C';
  } else if (average >= 4 && average < 6) {
    concept = 'D';
  } else if (average >= 0 && average < 4) {
    concept = 'E';
  } else {
    concept = 'Indefinido';
  }

  if (concept === 'A' || concept === 'B' || concept === 'C') {
    message = 'APROVADO';
  } else {
    message = 'REPROVADO';
  }

  return {
    notas: [...scores],
    average,
    concept,
    message
  };
};

console.log(verifyScore(6, 5.8));