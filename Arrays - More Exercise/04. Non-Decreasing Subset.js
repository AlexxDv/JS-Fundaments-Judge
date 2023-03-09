/* function nonDecreasingSub(array) {
  let num = Number.MIN_SAFE_INTEGER;
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= num) {
      num = array[i];
      newArr.push(array[i]);
    }
  }
  console.log(newArr.join(" "));
}
nonDecreasingSub([1, 3, 8, 4, 10, 12, 3, 2, 24]);
*/

function solve(array) {
  let max = Number.MIN_SAFE_INTEGER;
  let arr = array.filter(filterMaxNum);

  function filterMaxNum(num) {
    if (num >= max) {
      max = num;
      return true;
    }
    return false;
  }

  console.log(arr.join(" "));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
