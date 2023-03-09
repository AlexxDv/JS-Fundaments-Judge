function train(arr) {
  let passengers = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let comand = arr[i].split(" ");
    if (comand[0] === "Add") {
      passengers.push(Number(comand[1]));
    } else {
      for (let a = 0; a < passengers.length; a++) {
        if (Number(comand[0]) + passengers[a] <= maxCapacity) {
          passengers[a] += Number(comand[0]);
          break;
        }
      }
    }
  }
  console.log(passengers.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
