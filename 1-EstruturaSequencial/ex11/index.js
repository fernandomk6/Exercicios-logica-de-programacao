const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

// fazer validações

rl.question("Informe um numero inteiro: ", p => {
  const inteiro1 = parseFloat(p);
  rl.question("Informe outro numero inteiro: ", (p) => {
    const inteiro2 = parseFloat(p);
    rl.question("Informe um numero real: ", (p) => {
      const real = parseFloat(p);
      let a = (inteiro1 * 2) + (inteiro2 / 2);
      let b = (inteiro1 * 3) + real;
      const c = Math.pow(real, 3);
      console.log("o produto do dobro do primeiro com metade do segundo: " + a);
      console.log("a soma do triplo do primeiro com o terceiro: " + b);
      console.log("o terceiro elevado ao cubo: " + c);
      rl.close();
    });
  });
});