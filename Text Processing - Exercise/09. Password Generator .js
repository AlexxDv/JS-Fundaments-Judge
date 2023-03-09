function passwordG(input) {
  let password = input[0].concat(input[1]);
  let word = input[2];
  let vowels = ["a", "e", "i", "o", "u"];
  let index = 0;

  for (let letter of password) {
    if (vowels.includes(letter)) {
      if (index === word.length) {
        index = 0;
      }

      password = password.replace(letter, word[index].toUpperCase());
      index++;
    }
  }

  password = password.split("").reverse().join("");
  console.log(`Your generated password is ${password}`);
}

passwordG(["ilovepizza", "ihatevegetables", "orange"]);
