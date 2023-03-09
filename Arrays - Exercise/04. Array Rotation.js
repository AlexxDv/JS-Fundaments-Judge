function arrayRotation(array, num) {
  let newArray = array;
  for (let i = 0; i < num; i++) {
    let newChar = newArray.shift();
    newArray.push(newChar);
  }
  console.log(newArray.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
