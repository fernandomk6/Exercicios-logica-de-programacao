const triangle = (a, b, c) => {
  if ((a < b + c) && (b < a + c) && (c < a + b)) {
    if ((a == b) && (b == c)) {
      return 'Triângulo equilátero';
    } else if ((a == b) || (a == c) || (c == b)) {
      return 'Triângulo isósceles';
    } else {
      return 'Triângulo escaleno';
    }
  } else {
    return 'As medidas não forma um triâgulo';
  }
};

console.log(triangle(1, 5, 2));