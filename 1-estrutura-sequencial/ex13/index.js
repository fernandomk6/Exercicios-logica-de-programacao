const user = {
  height: 1.70,
  sex: "male"
}

const getIdealWeight = ({height, sex}) => {
  let idealWeight;

  if (sex === "female") {
    idealWeight = (62.1 * height) - 44.7
  }

  if (sex === "male") {
    idealWeight =  (72.7 * height) - 58
  }

  return idealWeight;
}

const idealWeight = getIdealWeight(user)
console.log(idealWeight)