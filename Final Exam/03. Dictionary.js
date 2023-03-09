function solve(input) {
  let text = input.shift().split("|");
  let search = input.shift().split("|");
  let command = input.shift();
  console.log(text);
  console.log(search);
  console.log(command);

  let result = {};
  for (let i = 0; i < text.length; i++) {
    let [word, explanation] = text[i].split(": ");
    result[word] = explanation;
  }

  if (command === "Hand Over") {
    let test = Object.keys(result);
    console.log(test.join(""));
  } else if (command === "Test") {
    for (let i = 0; i < search.length; i++) {
        let newS = search[i].trim();
        if (result.hasOwnProperty(newS)){
            console.log(`${newS}:`);
            console.log(result);

        }
        
    
    }
  }
      }
    
// solve([
//   "programmer: an animal, which turns coffee into code | developer: a magician",
//   "fish | domino",
//   "Hand Over",
// ]);

console.log("---------TEST 2---------");
solve([
  "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
  "care | kitchen | flower",
  "Test",
]);
