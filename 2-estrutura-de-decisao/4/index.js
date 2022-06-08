const isVowal = letter => {
  let vowal = ['a', 'e', 'i', 'o', 'u'];

  return !!vowal.find(element => element === letter);
};

console.log(isVowal('a'));