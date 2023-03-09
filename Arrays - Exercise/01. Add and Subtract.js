function addAndSubstract(arr) {
    let array = arr
  let originalSum = 0;
  let modifiedSum = 0;
  for (let i = 0; i < array.length; i++) {
    originalSum += array[i];
    if (array[i] % 2 == 0) {
      array[i] += i;
    } else {
      array[i] -= i;
    }
    modifiedSum += array[i];
  }
  console.log(array);
  console.log(originalSum); 
  console.log(modifiedSum);
}
addAndSubstract([5, 15, 23, 56, 35]);
