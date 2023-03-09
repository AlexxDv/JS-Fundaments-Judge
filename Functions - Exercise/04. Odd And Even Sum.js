function oddAndEven(number) {
  let string = String(number);

  function totalOddSum(numAsStr) {
    let oddSum = 0;
    for (let i = 0; i < numAsStr.length; i++) {
      let currNum = Number(numAsStr[i]);
      if (currNum % 2 != 0) {
        oddSum += currNum;
      }
    }
    return oddSum;
  }
  function totalEvenSum(numAsText) {
    let evenSum = 0;
    for (let i = 0; i < numAsText.length; i++) {
      let currNum = Number(numAsText[i]);
      if (currNum % 2 == 0) {
        evenSum += currNum;
      }
    }
    return evenSum;
  }
  console.log(`Odd sum = ${totalOddSum(string)}, Even sum = ${totalEvenSum(string)}`);
}
oddAndEven(1000435);
