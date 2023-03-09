function solve(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };

  let output = JSON.stringify(obj);
  console.log(output);
}
solve("George", "Jones", "Brown");
solve("Peter", "Smith", "Blond");
