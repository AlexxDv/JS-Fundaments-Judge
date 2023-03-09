function maxNumbers(array) {
  let topInt = [];
  for (let i = 0; i < array.length; i++) {
    let currNum = Number(array[i]);
    let isTop = true;
    for (let k = 1 + i; k < array.length; k++) {
      let nextNum = Number(array[k]);
      if (currNum <= nextNum) {
        isTop = false;
        break;
      }
    } 
    if (isTop) {
      topInt.push(currNum);
    }
  }
  console.log(topInt.join(" "));
}
maxNumbers([14, 24, 3, 19, 15, 17]);
