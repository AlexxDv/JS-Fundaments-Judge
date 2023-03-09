function modernTimes(text) {
  let specialWords = text
    .split(" ")
    .filter((word) => word.startsWith("#") && word.length > 1)
    .map((word) => word.slice(1));

  let isValid = true;

  for (let word of specialWords) {
    let wordLower = word.toLowerCase();

    for (let i = 0; i < wordLower.length; i++) {
      if (wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      console.log(word);
    }

    isValid = true;
  }
}

modernTimes(
  "Nowadays everyone uses # to tag a #special word in #socialMedia #social@12Media"
);
