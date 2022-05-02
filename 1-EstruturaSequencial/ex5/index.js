const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quantos metros? ", m => {
  const c = m * 100;
  console.log(`${m} metros equivalem a ${c} centrimetros`);
  rl.close();
});