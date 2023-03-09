function censoredWords(sentence, word) {
    let begin = '*';
  
    while (sentence.includes(word)) {
      sentence = sentence.replace(word, begin.repeat(word.length))
    }
  
    console.log(sentence);
  }

  censoredWords('A small sentence with some words', 'small');