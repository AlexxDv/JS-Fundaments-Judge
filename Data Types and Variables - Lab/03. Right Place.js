function rightPlace(word, char, result) {
  /*    let res = word.replace("_", char) 
        let out = res == result? "Matched": "Not Matched"
        console.log(out);
*/
  let res = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] == "_") {
      res += char;
    } else {
      res += word[i];
    }
  }
  let out = res == result ? "Matched" : "Not Matched";
  console.log(out);
}

rightPlace("Str_ng", "o", "Strong");
