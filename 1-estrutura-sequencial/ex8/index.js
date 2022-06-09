const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quanto você ganha por hora? ", p => {
  const valorHora = p;
  rl.question("Quantas horas horas você trabalha por mês? ", p => {
    const quantidadeHoras = p;
    const salario = valorHora * quantidadeHoras;
    console.log(`Seu salário mensal é de ${salario}`);
    rl.close();
  });
});