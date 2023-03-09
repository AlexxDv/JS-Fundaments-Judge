function addAndRemove(array) {
  let newArr = [];
  let start = 0;
  for (let i = 0; i < array.length; i++) {
    let command = array[i];
    if (command == "add") {
      start++;
      newArr.push(start);
    } else {
      newArr.pop();
      start++;
    }
  }
  if (newArr.length == 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
