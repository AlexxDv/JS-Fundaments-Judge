function equalSums(array) {
  let isEqual = false;
  for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let l = i - 1; l >= 0; l--) {
      leftSum += array[l];
    }
    for (let r = i + 1; r < array.length; r++) {
      rightSum += array[r];
    }
    if (leftSum == rightSum) {
      console.log(i);
      isEqual = true;
    }
  }
  if (!isEqual) {
    console.log("no");
  }
}
equalSums([1,2,3,3]);
