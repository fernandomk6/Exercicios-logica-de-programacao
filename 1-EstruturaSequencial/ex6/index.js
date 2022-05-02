const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual o raio do círculo? ", r => {
  // A área de um círculo é pi vezes o raio elevado ao quadrado
  const pi = 3.14;
  let a = pi * Math.pow(r, 2);
  console.log(`A área é ${a}`);
  rl.close();
});