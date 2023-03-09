function storeProvision(currStock, orderedStock) {
  let storeProducts = {};

  for (let i = 0; i < currStock.length; i += 2) {
    let product = currStock[i];
    storeProducts[product] = Number(currStock[i + 1]); //storeProducts.products
  }
  for (let i = 0; i < orderedStock.length; i += 2) {
    let product = orderedStock[i];
    if (!storeProducts.hasOwnProperty(product)) {
      storeProducts[product] = 0;
    }

    storeProducts[product] += Number(orderedStock[i + 1]);
  }
//   for (let product in storeProducts) {
//     console.log(`${product} -> ${storeProducts[product]}`);
//   }
  let entries = Object.entries(storeProducts);
  entries.forEach(el => console.log(`${el[0]} -> ${el[1]}`))
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
