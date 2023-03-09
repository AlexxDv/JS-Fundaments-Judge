function theImitationGame(input) {
  let decryptedMessage = input.shift();

  let move = (str, n) => str.slice(n) + str.slice(0, n);

  let insert = (str, i, value) => str.slice(0, i) + value + str.slice(i);

  function changeAll(str, substring, replacement) {
    while (str.includes(substring)) {
      str = str.replace(substring, replacement);
    }

    return str;
  }

  for (let elem of input) {
    if (elem === "Decode") break;

    let [command, ...rest] = elem.split("|");

    switch (command) {
      case "Move":
        let numberOfLetters = Number(rest[0]);
        decryptedMessage = move(decryptedMessage, numberOfLetters);
        break;
      case "Insert":
        let index = Number(rest[0]);
        let value = rest[1];
        decryptedMessage = insert(decryptedMessage, index, value);
        break;
      case "ChangeAll":
        let substring = rest[0];
        let replacement = rest[1];
        decryptedMessage = changeAll(decryptedMessage, substring, replacement);
        break;
      default:
        console.log("No such command!");
        continue;
    }
  }

  console.log(`The decrypted message is: ${decryptedMessage}`);
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
