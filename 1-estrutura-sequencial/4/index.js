const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];
let avg = 0;

rl.question("Primeira nota: ", n => {
  notas.push(n);
  rl.question("Segunda nota: ", n => {
    notas.push(n);
    rl.question("Terceira nota: ", n => {
      notas.push(n);
      rl.question("Quarta nota: ", n => {
        notas.push(n);
        avg = notas.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / notas.length;
        console.log(`A media das notas é: ${avg}`);
        rl.close();
      });
    });
  });
});