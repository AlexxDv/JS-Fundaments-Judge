function solve(priceRatings, entryPoint, typeOfItems) {
  let leftSide = priceRatings.slice(0, entryPoint);
  let rightSide = priceRatings.slice(entryPoint + 1);
  let entryPointNumber = Number(priceRatings[entryPoint]);
  let numsLeft = 0;
  let numsRight = 0;
  let leftSum = 0;
  let rightSum = 0;

  if (typeOfItems === "cheap") {
    numsLeft = leftSide.filter((num) => num < entryPointNumber);
    numsRight = rightSide.filter((num) => num < entryPointNumber);
  } else if (typeOfItems === "expensive") {
    numsLeft = leftSide.filter((num) => num >= entryPointNumber);
    numsRight = rightSide.filter((num) => num >= entryPointNumber);
  }
  for (let el of numsLeft) {
    leftSum += el;
  }
  for (let el of numsRight) {
    rightSum += el;
  }
  if (leftSum >= rightSum) {
    console.log(`Left - ${leftSum}`);
  } else {
    console.log(`Right - ${rightSum}`);
  }
}
solve([1, 5, 1], 1, "cheap");
solve([5, 10, 12, 5, 4, 20], 3, "cheap");
solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
