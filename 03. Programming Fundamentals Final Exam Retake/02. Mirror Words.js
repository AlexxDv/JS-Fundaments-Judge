function mirrorWords(input) {
  let text = input[0];
  let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
  let mirrorWordsArr = [];
  let counter = 0;
  let pairsMessage = "";
  let mirrorWordsMessage = "";
  let foundMatch;

  while ((foundMatch = pattern.exec(text)) !== null) {
    counter++;
    let word1 = foundMatch.groups.word1;
    let word2 = foundMatch.groups.word2;
    let reversed = word2.split("").reverse().join("");

    if (word1 === reversed) {
      mirrorWordsArr.push(`${word1} <=> ${word2}`);
    }
  }

  if (counter === 0) {
    pairsMessage = "No word pairs found!";
  } else {
    pairsMessage = `${counter} word pairs found!`;
  }

  if (mirrorWordsArr.length === 0) {
    mirrorWordsMessage = "No mirror words!";
  } else {
    mirrorWordsMessage = "The mirror words are:\n" + mirrorWordsArr.join(", ");
  }

  console.log(pairsMessage);
  console.log(mirrorWordsMessage);
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
