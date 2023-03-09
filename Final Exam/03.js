function solve(input) {
    let text = input.shift().split("|").map(t => t.trim());
    let search = input.shift().split("|").map(s => s.trim());
    let command = input.shift();
  
    let result = {};
  
    for (let i = 0; i < text.length; i++) {
      let [word, explanation] = text[i].split(": ");
  
      if (result.hasOwnProperty(word)) {
        result[word] = result[word] + "\n-" + explanation;
      } else {
        result[word] = explanation;
      }
    }
  
    if (command === "Hand Over") {
      let test = Object.keys(result);
      console.log(test.join(" "));
    } else if (command === "Test") {
      search.map((s) => {
        if (result.hasOwnProperty(s)) {
          console.log(`${s}:`);
          console.log(`-${result[s]}`);
        }
      });
    }
  }

  solve([
      "programmer: an animal, which turns coffee into code | developer: a magician",
      "fish | domino",
      "Hand Over",
    ]);