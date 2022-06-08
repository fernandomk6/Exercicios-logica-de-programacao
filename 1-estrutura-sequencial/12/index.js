const userHeigth = 1.70

const getIdealWeight = (height) => {
  const idealWeight = (72.7 * height) - 58
  return idealWeight
}

const idealWight = getIdealWeight(userHeigth)
console.log(idealWight)