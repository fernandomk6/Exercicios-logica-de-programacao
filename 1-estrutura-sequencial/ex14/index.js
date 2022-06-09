const overfishing = (kilogram) => {
  const maxKilogram = 50.00
  const finePerKilo = 4.00

  if (kilogram > maxKilogram) {
    const excess = kilogram - maxKilogram;
    const fineAmount = excess * finePerKilo;
    return {
      excess,
      fineAmount
    }
  }
}

const dataFishing = overfishing(48)
if (dataFishing) {
  console.log(`KG em ecesso: ${dataFishing.excess}, Valor multa: ${dataFishing.fineAmount}`)
} else {
  console.log('Nenhum excesso encontrado')
}
