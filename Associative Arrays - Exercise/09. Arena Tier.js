function arenaTier(input) {
  let gladiatorPool = {};
  for (let line of input) {
    if (line == "Ave Cesar") {
      break;
    }
    let tokens = line.split(" -> ");
    if (tokens.length > 1) {
      let name = tokens[0];
      let tehnique = tokens[1];
      let skill = Number(tokens[2]);
      if (!gladiatorPool.hasOwnProperty(name)) {
        gladiatorPool[name] = {};
      }
      if (!gladiatorPool[name].hasOwnProperty(tehnique)) {
        gladiatorPool[name][tehnique] = 0;
      }
      let oldSkill = gladiatorPool[name][tehnique];
      if (oldSkill < skill) {
        gladiatorPool[name][tehnique] = skill;
      }
    } else {
      tokens = tokens[0].split(" vs ");
      let gladiadiatorA = tokens[0];
      let gladiadiatorB = tokens[1];
      if (
        !gladiatorPool.hasOwnProperty(gladiadiatorA) ||
        !gladiatorPool.hasOwnProperty(gladiadiatorB)
      ) {
        continue;
      }
      let sumGladiatorOne = 0;
      let sumGladiatorTwo = 0;
      for (let [tehnique, skill] of Object.entries(
        gladiatorPool[gladiadiatorA]
      )) {
        if (gladiatorPool[gladiadiatorB].hasOwnProperty(tehnique)) {
          sumGladiatorOne += gladiatorPool[gladiadiatorA][tehnique];
          sumGladiatorTwo += gladiatorPool[gladiadiatorB][tehnique];
        }
      }
      if (sumGladiatorOne > sumGladiatorTwo) {
        delete gladiatorPool[gladiadiatorB];
      } else if (sumGladiatorOne < sumGladiatorTwo) {
        delete gladiatorPool[gladiadiatorA];
      }
    }
  }
  let gladiatorTotalSkill = {};
  for (let [gladiatorName, tehniquePool] of Object.entries(gladiatorPool)) {
    if (!gladiatorTotalSkill.hasOwnProperty(gladiatorName)) {
      gladiatorTotalSkill[gladiatorName] = 0;
    }
    let sum = 0;
    for (let currentSkill of Object.values(tehniquePool)) {
      sum += currentSkill;
    }
    gladiatorTotalSkill[gladiatorName] = sum;
  }
  let sortCladiatorName = Object.entries(gladiatorTotalSkill).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA || keyA.localeCompare(keyB);
    }
  );

  for (let [name, points] of sortCladiatorName) {
    console.log(`${name}: ${points} skill`);
    let sortItems = Object.entries(gladiatorPool[name]).sort(
      ([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA || keyA.localeCompare(keyB);
      }
    );
    for (let [techName, techSkill] of sortItems) {
      console.log(`- ${techName} <!> ${techSkill}`);
    }
  }
}
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
