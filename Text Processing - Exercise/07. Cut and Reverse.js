function cutAndReverse(text) {
  let reversedText = text.split("").reverse().join("");
  let halfLength = reversedText.length / 2;
  let output = "";

  for (let i = halfLength; i < reversedText.length; i++) {
    output += reversedText[i];
  }

  output += "\n";

  for (let i = 0; i < halfLength; i++) {
    output += reversedText[i];
  }

  console.log(output);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
