function pirates(input) {
  let targetedCities = {};
  let startIndex = input.indexOf("Sail") + 1;
  let len = input.length;

  for (let elem of input) {
    if (elem === "Sail") break;

    let [city, population, gold] = elem.split("||");
    population = Number(population);
    gold = Number(gold);

    if (!targetedCities.hasOwnProperty(city)) {
      targetedCities[city] = {
        population: 0,
        gold: 0,
      };
    }

    targetedCities[city].population += population;
    targetedCities[city].gold += gold;
  }

  function plunder(obj, town, people, gold) {
    obj[town].population -= people;
    obj[town].gold -= gold;

    console.log(
      `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
    );

    if (obj[town].population <= 0 || obj[town].gold <= 0) {
      delete obj[town];
      console.log(`${town} has been wiped off the map!`);
    }
  }

  function prosper(obj, town, gold) {
    if (gold < 0) {
      console.log("Gold added cannot be a negative number!");
      return;
    }

    obj[town].gold += gold;

    console.log(
      `${gold} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`
    );
  }

  for (let i = startIndex; i < len; i++) {
    if (input[i] === "End") break;

    let [command, town, ...rest] = input[i].split("=>");

    switch (command) {
      case "Plunder":
        let peopleKilled = Number(rest[0]);
        let goldTaken = Number(rest[1]);
        plunder(targetedCities, town, peopleKilled, goldTaken);
        break;
      case "Prosper":
        let goldIncrease = Number(rest[0]);
        prosper(targetedCities, town, goldIncrease);
        break;
      default:
        console.log("No such command!");
        continue;
    }
  }

  let settlements = Object.entries(targetedCities);
  let count = settlements.length;

  if (count === 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
    return;
  }

  console.log(
    `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
  );

  settlements.forEach(([town, obj]) => {
    console.log(
      `${town} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg`
    );
  });
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
