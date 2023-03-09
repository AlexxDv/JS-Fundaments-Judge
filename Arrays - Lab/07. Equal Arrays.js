function equalArr(arr1, arr2) {
  let sum1 = 0;
  //   let sum2 = 0;

  //   for (let num of arr1) {
  //     let i = Number(num);
  //     sum1 += i;
  //   }
  //   for (let num of arr2) {
  //     let i = Number(num);
  //     sum2 += i;
  //   }

  let areEqual = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    } else {
      sum1 += Number(arr1[i]);
    }
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum1}`);
  }
}
equalArr(["10", "20", "10"], ["10", "20", "30"]);
