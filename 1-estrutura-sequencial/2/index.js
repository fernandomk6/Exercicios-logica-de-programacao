const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Digíte um número: `, number => {
  console.log(`O numero digitado foi ${number}`);
  readline.close();
});