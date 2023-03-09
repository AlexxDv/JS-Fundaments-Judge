function sumEvenNumbers(arr) {
  let sum = 0;
 
  for (let num of arr) {
    let i = Number(num);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
