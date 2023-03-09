function fancyBarcodes(input) {
  let barcodes = Number(input.shift());
  let pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
  let digitPattern = /\d/g;

  for (let i = 0; i < barcodes; i++) {
    let validItem = pattern.exec(input[i]);

    if (!validItem) {
      console.log("Invalid barcode");
      continue;
    }

    let product = validItem.groups.product;
    let digits = product.match(digitPattern);
    let productGroup = "00";

    if (digits) {
      productGroup = digits.join("");
    }

    console.log(`Product group: ${productGroup}`);
  }
}

fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
