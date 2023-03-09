function softUniBarIncome(input) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[\d.]+)\$/;
  let total = 0;

  for (let elem of input) {
    if (elem === "end of shift") break;

    let validItem = pattern.exec(elem);

    if (!validItem) continue;

    let name = validItem.groups.name;
    let product = validItem.groups.product;
    let count = Number(validItem.groups.count);
    let price = Number(validItem.groups.price);

    let currentTotal = count * price;
    total += currentTotal;

    console.log(`${name}: ${product} - ${currentTotal.toFixed(2)}`);
  }

  console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
