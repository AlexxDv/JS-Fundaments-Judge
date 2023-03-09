function arrayManipulation(commands) {
  let arr = commands.shift().split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, num1, num2] = commands[i].split(" ");

    num1 = Number(num1);
    num2 = Number(num2);

    switch (command) {
      case "Add": add(num1);break;
      case "Remove": remove(num1); break;
      case "RemoveAt": removeAt(num1); break;
      case "Insert": insert(num1, num2);break;
    }

  }
  function add(el) {
    arr.push(el);
  }
  function remove(num) {
    arr = arr.filter((el) => el !== num);
  }
  function removeAt(index) {
    arr.splice(index, 1);
  }
  function insert(num, index) {
    arr.splice(index, 0, num);
  }
  console.log(arr.join(" "));
}

arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
