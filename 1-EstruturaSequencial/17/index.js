const paintingBudget = (areaToBePainted) => {
  let litros = areaToBePainted / 6;
  let lata = 0;
  let galao = 0;

  if (litros > 14.4) {
    do {
      lata++;
      litros -= 18;
    } while (litros > 18);

    if (litros > 0) {
      for (galao; litros > 3.6; galao++) {
        galao++;
        litros -= 3.6;
      }
      if (litros > 0) {
        galao++;
        litros -= 3.6;
      }
    }

  } else {
    for (galao; litros > 3.6; galao++) {
      litros -= 3.6;
    }

    if(litros > 0) {
      galao++
      litros -= 3.6;
    }
  }

  litros = Math.abs(litros).toFixed(2);
  const precoLatas = lata * 80;
  const precoGalao = galao * 25;
  const precoTotal = precoGalao + precoLatas;

  if (lata == 0) {
    return `Será mais rentavel comprar apenas galões.\n${galao} galoe(s). Sobrará ${litros} litros, e lhe custará apenas ${precoTotal}`;
  } else if (galao == 0) {
    return `Será mais rentavel comprar apenas latas.\n${lata} lata(s). Sobrará ${litros} litros, e lhe custará apenas ${precoTotal}`;
  } else {
    return `Será mais rentavel comprar galões e latas.\n${galao} galoe(s) e ${lata} lata(s). Sobrará ${litros} litros, e lhe custará apenas ${precoTotal}`;
  }
};

console.log(paintingBudget(80));