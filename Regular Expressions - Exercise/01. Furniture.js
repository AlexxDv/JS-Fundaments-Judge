function furniture(input) {
  let pattern =
    />>(?<furniture>[A-Z][a-zA-Z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/;
  let totalCost = 0;

  console.log("Bought furniture:");

  for (let item of input) {
    let validItem = pattern.exec(item);

    if (!validItem) continue;

    let furniture = validItem.groups.furniture;
    let price = Number(validItem.groups.price);
    let quantity = Number(validItem.groups.quantity);

    let currentCost = price * quantity;
    totalCost += currentCost;

    console.log(furniture);
  }

  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
