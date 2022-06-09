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

const fishing = overfishing(48)
if (fishing) {
  console.log(`Excesso ${fishing.excess}, multa ${fishing.fineAmount}`)
} else {
  console.log('Nenhum excesso encontrado')
}
