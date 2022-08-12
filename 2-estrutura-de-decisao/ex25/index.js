const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let points = 0;

rl.question('Telefonou para a vítima? ', (answer) => {
  if (answer.trim().toLowerCase() === 'sim') points++;

  rl.question('Esteve no local do crime?', (answer) => {
    if (answer.trim().toLowerCase() === 'sim') points++;

    rl.question('Mora perto da vítima?', (answer) => {
      if (answer.trim().toLowerCase() === 'sim') points++;

      rl.question('Devia para a vítima?', (answer) => {
        if (answer.trim().toLowerCase() === 'sim') points++;

        rl.question('Já trabalhou com a vítima?', (answer) => {
          if (answer.trim().toLowerCase() === 'sim') points++;

          if (points >= 5) {
            console.log('Assasino');
          } else if (points >= 3) {
            console.log('Cúmplice');
          } else if (points >= 2) {
            console.log('S U P E I T O');
          } else {
            console.log('Inocente');
          }
        
          rl.close();
        });
      });
    });
  });
});
