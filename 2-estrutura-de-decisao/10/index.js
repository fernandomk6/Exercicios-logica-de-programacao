const greet = currentShift => {
  const allShifts = ['matutino', 'vesperino' , 'noturno'];
  return allShifts.find(element => element === currentShift) || 'Olá';
}

console.log(greet('matutino'));