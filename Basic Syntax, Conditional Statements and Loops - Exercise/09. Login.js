function login(input) {
  let index = 0;
  let neededPass = input[index];
  index++;
  let enteredPass = input[index];
  index++;

  let neededPassReverse = neededPass.split("").reverse().join("");
  let counter = 0;

  while (neededPassReverse != enteredPass) {
    if (counter == 3) {
      console.log(`User ${neededPass} blocked!`);
      break;
    }
    counter++;
    console.log("Incorrect password. Try again.");
    enteredPass = input[index];
    index++;
  }
  if (neededPassReverse == enteredPass) {
    console.log(`User ${neededPass} logged in.`);
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
