function needForSpeed(input) {
  let MAX_MILEAGE = 100000;
  let MAX_TANK_FUEL = 75;
  let MIN_MILEAGE = 10000;
  let numberOfCars = Number(input.shift());
  let cars = {};

  for (let i = 0; i < numberOfCars; i++) {
    let [car, mileage, fuel] = input.shift().split("|");
    mileage = Number(mileage);
    fuel = Number(fuel);

    cars[car] = {
      mileage,
      fuel,
    };
  }

  function drive(obj, car, distance, fuel) {
    if (obj[car].fuel < fuel) {
      console.log("Not enough fuel to make that ride");
      return;
    }

    obj[car].mileage += distance;
    obj[car].fuel -= fuel;
    console.log(
      `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
    );

    if (obj[car].mileage >= MAX_MILEAGE) {
      delete obj[car];
      console.log(`Time to sell the ${car}!`);
    }
  }

  function refuel(obj, car, fuel) {
    if (obj[car].fuel + fuel > MAX_TANK_FUEL) {
      fuel = MAX_TANK_FUEL - obj[car].fuel;
    }

    obj[car].fuel += fuel;
    console.log(`${car} refueled with ${fuel} liters`);
  }

  function revert(obj, car, kilometers) {
    obj[car].mileage -= kilometers;

    if (obj[car].mileage < MIN_MILEAGE) {
      obj[car].mileage = MIN_MILEAGE;
      return;
    }

    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
  }

  for (let elem of input) {
    if (elem === "Stop") break;

    let [command, car, ...rest] = elem.split(" : ");

    switch (command) {
      case "Drive":
        let distance = Number(rest[0]);
        let fuelToRemove = Number(rest[1]);
        drive(cars, car, distance, fuelToRemove);
        break;
      case "Refuel":
        let fuelToRefill = Number(rest[0]);
        refuel(cars, car, fuelToRefill);
        break;
      case "Revert":
        let kilometers = Number(rest[0]);
        revert(cars, car, kilometers);
        break;
      default:
        console.log("No such command!");
        continue;
    }
  }

  Object.entries(cars).forEach(([car, obj]) => {
    console.log(
      `${car} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`
    );
  });
}

needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
