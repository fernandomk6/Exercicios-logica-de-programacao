const paintingBudget = (areaToBePainted) => {
  let liter = areaToBePainted / 6;
  let tin = 0;
  let gallon = 0;

  if (liter > 14.4) {
    do {
      tin++;
      liter -= 18;
    } while (liter > 18);

    if (liter > 0) {
      for (gallon; liter > 3.6; gallon++) {
        gallon++;
        liter -= 3.6;
      }
      if (liter > 0) {
        gallon++;
        liter -= 3.6;
      }
    }

  } else {
    for (gallon; liter > 3.6; gallon++) {
      liter -= 3.6;
    }

    if(liter > 0) {
      gallon++
      liter -= 3.6;
    }
  }

  liter = Math.abs(liter).toFixed(2);
  const priceTin = tin * 80;
  const priceGallon = gallon * 25;
  const priceTotal = priceGallon + priceTin;

  if (tin == 0) {
    return `Será mais rentavel comprar apenas galões.\n${gallon} galoe(s). Sobrará ${liter} litros, e lhe custará apenas ${priceTotal}`;
  } else if (gallon == 0) {
    return `Será mais rentavel comprar apenas latas.\n${lata} lata(s). Sobrará ${liter} litros, e lhe custará apenas ${priceTotal}`;
  } else {
    return `Será mais rentavel comprar galões e latas.\n${gallon} galoe(s) e ${lata} lata(s). Sobrará ${liter} litros, e lhe custará apenas ${precoTotal}`;
  }
};

console.log(paintingBudget(80));