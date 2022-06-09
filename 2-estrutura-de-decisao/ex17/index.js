const leapYear = year => {
  if (year % 400 == 0) {
    return `${year} é bissexto`;
  } else if ((year % 4 == 0) && !(year % 100 === 0)) {
    return `${year} é bissexto`;
  } else {
    return 'O ano informado não é bissexto';
  }
}

console.log(leapYear(2004));