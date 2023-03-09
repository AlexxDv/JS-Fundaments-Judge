function magicSum(array, magicNum) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      sum = Number(array[i]) + Number(array[j]);
      if (sum == magicNum) {
        console.log(`${array[i]} ${array[j]}`);
      }
    }
  }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
