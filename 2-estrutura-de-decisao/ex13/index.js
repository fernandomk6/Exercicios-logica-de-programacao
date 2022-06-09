const getDay = number => {
  const dayOfTheWeek = [null, 'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
  return dayOfTheWeek[number] || 'valor invalido';
};

console.log(getDay(3));