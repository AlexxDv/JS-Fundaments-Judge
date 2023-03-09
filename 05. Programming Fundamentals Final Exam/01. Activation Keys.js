function activationKeys(input) {
  let rawKey = input.shift();
  input.pop();

  for (let line of input) {
    let tokens = line.split(">>>");

    if (tokens[0] === "Contains") {
      if (rawKey.includes(tokens[1])) {
        console.log(`${rawKey} contains ${tokens[1]}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (tokens[0] === "Flip") {
      let before = rawKey.slice(0, tokens[2]);
      let after = rawKey.slice(tokens[3]);
      let flipped = rawKey.slice(tokens[2], tokens[3]);

      if (tokens[1] === "Upper") {
        flipped = flipped.toUpperCase();
      } else {
        flipped = flipped.toLowerCase();
      }
      rawKey = before + flipped + after;
      console.log(rawKey);
    } else if (tokens[0] === "Slice") {
      let before = rawKey.slice(0, tokens[1]);
      let after = rawKey.slice(tokens[2]);
      rawKey = before + after;
      console.log(rawKey);
    }
  }
  console.log(`Your activation key is: ${rawKey}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
