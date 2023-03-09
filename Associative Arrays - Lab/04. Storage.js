function storage(input) {
  let items = new Map();

  input.forEach((elem) => {
    let [item, quantity] = elem.split(" ");
    quantity = Number(quantity);

    if (items.has(item)) {
      let oldQuantity = items.get(item);
      let newQuantity = oldQuantity + quantity;
      items.set(item, newQuantity);
    } else {
      items.set(item, quantity);
    }
  });

  for (let [key, value] of items) {
    console.log(`${key} -> ${value}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
