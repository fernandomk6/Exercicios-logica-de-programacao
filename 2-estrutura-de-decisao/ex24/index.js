const getOperation = operator => {
  if (operator === "+") 
    return (firstNumber, secondNumber) => firstNumber + secondNumber;

  if (operator === "-") 
    return (firstNumber, secondNumber) => firstNumber - secondNumber;

  if (operator === "/") 
    return (firstNumber, secondNumber) => firstNumber / secondNumber;
  
  if (operator === "*") 
    return (firstNumber, secondNumber) => firstNumber * secondNumber;
  
}

const calculator = (firstNumber, secondNumber, operator) => {
  const operation = getOperation(operator);
  const result = operation(firstNumber, secondNumber);

  const even = result % 2 === 0 ? 'par' : 'ímpar';
  const positive = result > 0 ? 'positivo' : 'negativo';
  const integer = Number.isInteger(result) ? 'inteiro' : 'não inteiro';

  return `Resultado: ${result}, ${positive}, ${even}, ${integer}.`;
}

const result = calculator(1, 0.6, "-");
console.log(result);