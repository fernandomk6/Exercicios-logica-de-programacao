function isPlural(aNumber) {
  return aNumber > 1 ? 's' : '';
}

function getFullNumber(aNumber) {
  const numberParts = String(aNumber).split("");

  if (numberParts.length === 3) {
    return numberParts.reduce((accumulator, unit, index) => {

      if (index === 0) accumulator = `${unit} centena${isPlural(unit)}`;
      if (index === 1) accumulator = `${accumulator}, ${unit} dezena${isPlural(unit)}`;
      if (index === 2) accumulator = `${accumulator} e ${unit} unidade${isPlural(unit)}.`;
      
      return accumulator;
    }, '');
  }

  if (numberParts.length === 2) {
    return numberParts.reduce((accumulator, unit, index) => {

      if (index === 0) accumulator = `${unit} dezena${isPlural(unit)}`;
      if (index === 1) accumulator = `${accumulator} e ${unit} unidade${isPlural(unit)}.`;
      
      return accumulator;
    }, '');
  }

  if (numberParts.length === 1) {
    return numberParts.reduce((accumulator, unit, index) => {

      if (index === 0) accumulator = `${unit} unidade${isPlural(unit)}.`;
      
      return accumulator;
    }, '');
  }
}

const dataToTest = [326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7, 16];

dataToTest.forEach(number => console.log(number, getFullNumber(number)));
