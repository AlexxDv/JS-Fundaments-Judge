function sorting(array) {
  array.sort((a, b) => b - a);
  let newArray = [];

  while (array.length > 0) {
    let bigNum = array.shift();
    newArray.push(bigNum);
    let smallNum = array.pop();
    newArray.push(smallNum);
  }
  console.log(newArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
