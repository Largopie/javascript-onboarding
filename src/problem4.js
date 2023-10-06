const createDictionary = (lowerCaseList, upperCaseList) => {
  const dictionary = {};
  for(let i = 0; i < lowerCaseList.length; i++) {
    dictionary[lowerCaseList[i]] = lowerCaseList[lowerCaseList.length -1 - i];
    dictionary[upperCaseList[i]] = upperCaseList[upperCaseList.length - 1 - i];
  }

  return dictionary;
}

const createAlphabetList = (startIndex) => {
  const alphabetList = Array.from({length: 26}, (value, index) => String.fromCharCode(index + startIndex));

  return alphabetList;
}

function problem4(word) {
  const upperCaseAlphabetList = createAlphabetList(65);
  const lowerCaseAlphabetList = createAlphabetList(97);

  const treeFrogDictionary = createDictionary(lowerCaseAlphabetList, upperCaseAlphabetList);
  let reverseWord = '';

  for(char of word) {
    if(treeFrogDictionary[char]) reverseWord+=treeFrogDictionary[char]
    else reverseWord+=char;
  }

  return reverseWord;
}

module.exports = problem4;
