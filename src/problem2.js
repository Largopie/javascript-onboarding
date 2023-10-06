const findDuplication = (string) => {
  const duplication = [];
  for(let i = 1; i < string.length; i++) {
    if(string[i - 1] === string[i]) {
      if(!duplication.includes(string[i])) {
        duplication.push(string[i]);
      }
    }
  }
  if(duplication.length === 0) return false;

  return duplication;
}

const deleteDuplication = (deleteChar, string) => {
  for(char of deleteChar) {
    string = string.replaceAll(`${char}${char}`, '');
  }

  return string;
}

function problem2(cryptogram) {
  let new_cryptogram = cryptogram;
  
  while(findDuplication(new_cryptogram)) {
    const arr = findDuplication(new_cryptogram);
    new_cryptogram = deleteDuplication(arr, new_cryptogram);
  }

  return new_cryptogram;
}

module.exports = problem2;