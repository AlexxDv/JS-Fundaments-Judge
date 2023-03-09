function maxSeq(array) {
  let newArr = [];
  let longestArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr = [];
    for (let j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        newArr.push(array[j]);
      } else {
        break;
      }
      if (newArr.length > longestArr.length) {
        longestArr = newArr;
      }
    }
  }
  console.log(longestArr.join(" "));
}
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
