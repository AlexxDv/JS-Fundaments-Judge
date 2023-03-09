function solve(input) {
  const numberOfInputs = input.shift();
  const regex = /(.+)\>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^\<\>]{3})\<\1/;

  for (let i = 0; i < numberOfInputs; i++) {
    const test = input[i].match(regex);
    if (test === null) {
      console.log("Try another password!");
    } else {
      console.log(`Password: ${test[2]}${test[3]}${test[4]}${test[5]}`);
    }
  }
}
solve([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
