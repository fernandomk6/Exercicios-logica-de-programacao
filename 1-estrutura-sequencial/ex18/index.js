const size = 1000;
const speed = 100;

const downloadTime = (size, speed) => {
  let time = size / speed;
  time /= 60;
  time = time.toFixed(2);
  let minutes = Math.floor(time);
  let seconds = 0;
  if (time > 1) {
    seconds = Math.floor((time - minutes) * 60);
  } else {
    seconds = Math.ceil(time * 60);
  }

  return `Tempo estimado: ${minutes} minuto(s) e ${seconds} segundo(s)`;
};

console.log(downloadTime(size, speed));