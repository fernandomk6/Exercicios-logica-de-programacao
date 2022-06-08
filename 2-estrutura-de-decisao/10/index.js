const greet = currentShift => {

  switch (currentShift) {
    case 'matutino':
      return 'Bom dia';
    case 'vesperino':
      return 'Boa tarde';
    case 'noturno':
      return 'Boa noite';
    default:
      return 'Olá';
  }
  
}

console.log(greet('matutino'));