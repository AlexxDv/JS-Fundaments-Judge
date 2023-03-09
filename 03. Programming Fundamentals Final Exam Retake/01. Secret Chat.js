function secretChat(input) {
  let message = input.shift();

  let insertSpace = (str, index) =>
    str.slice(0, index) + " " + str.slice(index);

  function reverse(str, substring) {
    str = str.replace(substring, "");
    substring = substring.split("").reverse().join("");
    return str + substring;
  }

  function changeAll(str, substring, replacement) {
    let regex = new RegExp(substring, "g");
    return str.replace(regex, replacement);
  }

  for (let elem of input) {
    if (elem === "Reveal") break;

    let [command, ...rest] = elem.split(":|:");

    switch (command) {
      case "InsertSpace":
        let index = Number(rest[0]);
        message = insertSpace(message, index);
        break;
      case "Reverse":
        let substring = rest[0];

        if (!message.includes(substring)) {
          console.log("error");
          continue;
        }

        message = reverse(message, substring);
        break;
      case "ChangeAll":
        let substr = rest[0];
        let replacement = rest[1];
        message = changeAll(message, substr, replacement);
        break;
      default:
        console.log("No such command!");
        continue;
    }

    console.log(message);
  }

  console.log(`You have a new text message: ${message}`);
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
