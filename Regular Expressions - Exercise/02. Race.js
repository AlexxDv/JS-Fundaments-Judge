function race(input) {
  let competitors = input.shift().split(", ");
  let namePattern = /[a-z]+/gi;
  let distancePattern = /\d/g;
  let competitorsObj = {};

  for (let elem of input) {
    if (elem === "end of race") break;

    let name = elem.match(namePattern).join("");

    if (!competitors.includes(name)) continue;

    let distance = elem
      .match(distancePattern)
      .map(Number)
      .reduce((a, b) => a + b);

    if (!competitorsObj.hasOwnProperty(name)) {
      competitorsObj[name] = 0;
    }

    competitorsObj[name] += distance;
  }

  let counter = 1;

  Object.keys(competitorsObj)
    .sort((nameA, nameB) => competitorsObj[nameB] - competitorsObj[nameA])
    .slice(0, 3)
    .forEach((name) => {
      let message = "";

      if (counter === 1) {
        message = "1st place";
      } else if (counter === 2) {
        message = "2nd place";
      } else if (counter === 3) {
        message = "3rd place";
      }

      console.log(`${message}: ${name}`);
      counter++;
    });
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
