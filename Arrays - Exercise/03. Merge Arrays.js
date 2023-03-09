function mergeArrays(array1, array2) {
  let newArray = [];
  let currSum = 0;
  let currStr = "";

  for (let i = 0; i < array1.length; i++) {
    if (i % 2 == 0) {
      currSum = Number(array1[i]) + Number(array2[i]);
      newArray.push(currSum);
    } else {
      currStr = array1[i] + array2[i];
      newArray.push(currStr);
    }
  }
  console.log(newArray.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
