function substring(word, startInd, count) {
    let newWord = word.slice(startInd, startInd + count);
    console.log(newWord);
  }
  
  substring('ASentence', 1, 8);