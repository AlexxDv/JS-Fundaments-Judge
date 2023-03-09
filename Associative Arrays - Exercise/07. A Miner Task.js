function aMinerTask(input) {
  let items = {};

  while (input.length !== 0) {
    let resource = input.shift();
    let quantity = Number(input.shift());

    if (!items.hasOwnProperty(resource)) {
      items[resource] = quantity;
    } else {
      items[resource] += quantity;
    }
  }

  let entries = Object.entries(items);

  for (let [resource, quantity] of entries) {
    console.log(`${resource} -> ${quantity}`);
  }
}

aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
