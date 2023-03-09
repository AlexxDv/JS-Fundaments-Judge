function emojiDetector(input) {
  let text = input[0];
  let pattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
  let digitPattern = /\d/g;

  let coolThreshold = text
    .match(digitPattern)
    .map(Number)
    .reduce((a, b) => a * b);

  let foundEmojis = text.match(pattern).length;

  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${foundEmojis} emojis found in the text. The cool ones are:`);

  let validEmoji;

  while ((validEmoji = pattern.exec(text)) !== null) {
    let emoji = validEmoji.groups.emoji;
    let currentSum = 0;

    for (let letter of emoji) {
      currentSum += letter.charCodeAt();
    }

    if (currentSum >= coolThreshold) {
      console.log(validEmoji[0]);
    }
  }
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
