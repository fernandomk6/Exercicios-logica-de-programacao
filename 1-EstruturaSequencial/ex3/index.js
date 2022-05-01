const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let a;

rl.question('Digite um número : ', (n) => {
  a = n;
  rl.question('Digíte outro número : ', (n) => {
    b = n;
      const result = parseFloat(a) + parseFloat(n);
      console.log(`A soma dos dois números é ${result}`);
      rl.close();
  });
});