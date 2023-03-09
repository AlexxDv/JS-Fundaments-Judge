function stringSubstring(word, text) {
  let textArr = text.split(" ");

  for (let wordToCheck of textArr) {
    if (word.toLowerCase() === wordToCheck.toLowerCase()) {
      console.log(word);
      return;
    }
  }

  console.log(`${word} not found!`);
}

stringSubstring("javascript", "JavaScript is the best programming language");
