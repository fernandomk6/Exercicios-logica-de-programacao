const calculatePayroll = (receivedPerHour, hoursPerMonth) => {
  const salaryGross = (receivedPerHour * hoursPerMonth).toFixed(2);
  let IR;

  if (salaryGross <= 900) {
    IR = 0;
  } else if (salaryGross <= 1500) {
    IR = salaryGross * 0.05;
  } else if (salaryGross <= 2500) {
    IR = salaryGross * 0.10;
  } else if (salaryGross > 2500) {
    IR = salaryGross * 0.20;
  }

  const INSS = salaryGross * 0.1;
  const FGTS = salaryGross * 0.11;
  const totalDiscount = IR + INSS;
  const salaryNet = salaryGross - totalDiscount;

  return {
    salaryGross, 
    salaryNet,
    IR,
    INSS,
    FGTS,
    totalDiscount
  };
};

console.log(calculatePayroll(50, 100));