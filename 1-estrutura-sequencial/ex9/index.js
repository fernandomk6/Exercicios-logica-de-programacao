const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe a temperatura em fahrenheit: ", p => {
  // C = 5 * ((F-32) / 9).
  const f = parseFloat(p);
  const c = 5 * ((f - 32) / 9);
  console.log(`A temperatura em graus Celsius é: ${c}`);
  rl.close();
});