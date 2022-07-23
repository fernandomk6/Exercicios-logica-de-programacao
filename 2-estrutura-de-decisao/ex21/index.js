function withdraw(value) {
  if (!Number.isInteger(value) || Math.sign(value) === -1) {
    return 'Only integers positive are allowed';
  } 

  const message = [];
  const notes = { cem: 0, cinquenta: 0, dez: 0, cinco: 0, um: 0 };

  for (value; value >= 0; value--) {
    for (const note = 100; value >= note; value -= note) {
      notes.cem++;
    }

    for (const note = 50; value >= note; value -= note) {
      notes.cinquenta++;
    }

    for (const note = 10; value >= note; value -= note) {
      notes.dez++;
    }

    for (const note = 5; value >= note; value -= note) {
      notes.cinco++;
    }

    for (const note = 1; value >= note; value -= note) {
      notes.um++;
    }
  }

  for (const note in notes) {
    if (notes[note] > 0) {
      message.push(`${notes[note]} nota${isPlural(notes[note])} de ${note}.`);
    }
  }

  return message.join(' ');
}

function isPlural(note) {
  return note > 1 ? 's' : '';
}

console.log(withdraw(350));