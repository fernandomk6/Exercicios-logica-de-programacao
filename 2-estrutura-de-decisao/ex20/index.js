function isAprovedMessage(n1, n2, n3) {
  const average = (n1 + n2 + n3) / 3;

  if (average === 10) {
    return 'Aprovado com distinção';
  }

  if (average >= 7) {
    return 'Aprovado';
  }

  if (average < 7) {
    return 'Reprovado';
  }
}
 
const result = isAprovedMessage(10, 10, 10);

console.log(result);