const moneyPerHour = 60;
const hoursPerMonth = 400;

const detailSalary = (moneyPerHour, hoursPerMonth) => {
  const INSS = 0.18
  const IR = 0.11
  const syndicate = 0.05

  const grossSalary = moneyPerHour * hoursPerMonth
  const valueINSS = grossSalary * INSS
  const valueIR = grossSalary * IR
  const valueSyndicate = grossSalary * syndicate
  const netSalary = grossSalary - valueINSS - valueIR - valueSyndicate
  
  return {
    grossSalary,
    netSalary,
    valueINSS,
    valueIR,
    valueSyndicate
  }
}

const {grossSalary, netSalary, valueINSS, valueSyndicate, valueIR} = 
  detailSalary(moneyPerHour, hoursPerMonth)

console.log(`Bruto: ${grossSalary}, Liquido: ${netSalary}, INSS: ${valueINSS}, IR: ${valueIR}, Sindicato: ${valueSyndicate}`)