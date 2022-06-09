const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe a temperatura em celsius: ", p => {
  const c = parseFloat(p);
  const f = 5 * (c * 1.8) + 32;
  console.log(`A temperatura em graus fahrenheit é: ${f}`);
  rl.close();
});