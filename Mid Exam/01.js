function solve(input) {
  let biscuitsProducedPerDay = Number(input.shift());
  let workersCount = Number(input.shift());
  let competingFactoryProduces = Number(input.shift());
  let workingDays = 30;
  let biscuitsProduced = 0;

  for (let i = 0; i < workingDays; i++) {
    if (i % 3 === 0) {
      biscuitsProduced += Math.floor( biscuitsProducedPerDay * workersCount * 0.75);
    } else {
      biscuitsProduced += biscuitsProducedPerDay * workersCount;
    }
  }
  let diff = biscuitsProduced - competingFactoryProduces;
  let difference = Math.abs(diff);
  let total = (difference / competingFactoryProduces) * 100;
  console.log(
    `You have produced ${biscuitsProduced} biscuits for the past month.`
  );
  if (diff < 0) {
    console.log(`You produce ${total.toFixed(2)} percent less biscuits.`);
  } else {
    console.log(`You produce ${total.toFixed(2)} percent more biscuits.`);
  }
}
solve(["78", "8", "16000"]);
solve(["65", "12", "26000"]);
solve(["163", "16", "67020"]);
