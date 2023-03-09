function stringManipulator(data) {
  let text = data.shift();
  let comm = data.shift();
  while (comm !== "End") {
    let [command, ...args] = comm.split(" ");
    switch (command) {
      case "Translate":
        let char = args[0];
        let replacement = args[1];
        text = text.split(char).join(replacement);
        console.log(text);
        break;
      case "Includes":
        let substring = args[0];
        if (text.includes(substring)) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Start":
        let start = args[0];
        if (text.startsWith(start)) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Lowercase":
        text = text.toLowerCase();
        console.log(text);
        break;
      case "FindIndex":
        let charToFind = args[0];
        let index = text.lastIndexOf(charToFind);
        console.log(index);
        break;
      case "Remove":
        let startIndex = Number(args[0]);
        let count = Number(args[1]);
        text = text.slice(0, startIndex) + text.slice(startIndex + count);
        console.log(text);
        break;
    }
    comm = data.shift();
  }
}
stringManipulator([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);
// stringManipulator(["*S0ftUni is the B3St Plac3**",
// "Translate 2 o",
// "Includes best",
// "Start the",
// "Lowercase",
// "FindIndex p",
// "Remove 2 7",
// "End"])
