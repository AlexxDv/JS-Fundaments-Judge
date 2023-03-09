function replaceRepeatingChars(text) {
  let output = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      continue;
    }

    output += text[i];
  }

  console.log(output);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
