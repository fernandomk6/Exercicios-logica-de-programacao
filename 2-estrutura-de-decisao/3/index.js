const verifySex = letter => letter == 'm' ? 'm - male' : letter == 'f' ? 'f - female' : 'sex invalid';

console.log(verifySex('m'));