function bitcoin(input) {
  let btcPrice = 11949.16;
  let goldPrice = 67.51;

  let btcCount = 0;
  let index = 0;

  let totalgold = 0;
  let dayOfFirtsPurchase = 0;
  let btcTotal = 0;

  for (let i = 1; i <= input.length; i++) {
    let currGold = Number(input[index]);
    index++;

    if (i % 3 == 0) {
      currGold *= 0.7;
    }

    totalgold += currGold * goldPrice;
    if (totalgold > btcPrice) {
      if (btcCount == 0) {
        dayOfFirtsPurchase = i;
      }

      btcCount = Math.floor(totalgold / btcPrice);
      totalgold -= btcPrice * btcCount;
      btcTotal += btcCount;
    }
  }
  console.log(`Bought bitcoins: ${btcTotal}`);
  if (btcCount > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirtsPurchase}`);
  }
  console.log(`Left money: ${totalgold.toFixed(2)} lv.`);
}
bitcoin([3124.15, 504.212, 2511.124]);
