function solve(input) {
  let allHisFriends = input.shift().split(", ");
  let blacklistedCount = 0;
  let lostNamesCount = 0;
  for (let el of input) {
    let command = el.split(" ");
    if (command[0] === "Report") {
      break;
    }
    if (command[0] === "Blacklist") {
      let name = command[1];
      if (allHisFriends.includes(name)) {
        let index = allHisFriends.indexOf(name);
        console.log(`${name} was blacklisted.`);
        allHisFriends.splice(index, 1, "Blacklisted");
        blacklistedCount++;
      } else {
        console.log(`${name} was not found.`);
      }
    } else if (command[0] === "Error") {
      let index = Number(command[1]);
      if (
        index >= 0 &&
        index < allHisFriends.length &&
        allHisFriends[index] !== "Blacklisted" &&
        allHisFriends[index] !== "Lost"
      ) {
        let name = allHisFriends[index];
        console.log(`${name} was lost due to an error.`);
        allHisFriends.splice(index, 1, "Lost");
        lostNamesCount++;
      }
    } else if (command[0] === "Change") {
      let index = Number(command[1]);
      let name = command[2];
      if (
        index >= 0 &&
        index < allHisFriends.length &&
        allHisFriends[index] !== "Blacklisted"
      ) {
        console.log(`${allHisFriends[index]} changed his username to ${name}.`);
        allHisFriends.splice(index, 1, name);
      }
    }
  }
  console.log(`Blacklisted names: ${blacklistedCount}`);
  console.log(`Lost names: ${lostNamesCount}`);
  console.log(allHisFriends.join(" "));
}
// solve(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
// solve([
//   "Mike, John, Eddie, William",
//   "Error 3",
//   "Error 3",
//   "Change 0 Mike123",
//   "Report",
// ]);
solve([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
