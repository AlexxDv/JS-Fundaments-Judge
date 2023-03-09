function evenANdOddSub(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let num of arr) {
    let i = Number(num);
    if (i % 2 == 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  console.log(evenSum - oddSum);
}
evenANdOddSub([3,5,7,9]);
