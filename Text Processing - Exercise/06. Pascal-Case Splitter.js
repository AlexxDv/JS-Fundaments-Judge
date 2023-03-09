function pascalCaseSplitter(text) {
  let output = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 && i !== 0) {
      output += ", " + text[i];
    } else {
      output += text[i];
    }
  }

  console.log(output);
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
