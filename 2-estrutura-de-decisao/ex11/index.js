const salaryReadjustment = salary => {
  const oldSalary = salary;
  let newSalary;
  let incrementPercentage;
  let incrementvalue;

  if (salary <= 280) {
    newSalary = salary * 1.2;
    incrementPercentage = 0.2;
    incrementvalue = newSalary - salary;
  } else if (salary > 280 && salary <= 700) {
    newSalary = salary * 1.15;
    incrementPercentage = 0.15;
    incrementvalue = newSalary - salary;
  } else if (salary > 700 && salary <= 1500) {
    newSalary = salary * 1.1;
    incrementPercentage = 0.1;
    incrementvalue = newSalary - salary;
  } else if (salary > 1500) {
    newSalary = salary * 1.05;
    incrementPercentage = 0.05;
    incrementvalue = newSalary - salary;
  }

  return {
    oldSalary,
    newSalary,
    incrementPercentage,
    incrementvalue
  }
}

console.log(salaryReadjustment(5000));