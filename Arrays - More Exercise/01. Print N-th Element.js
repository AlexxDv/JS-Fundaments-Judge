function printNthElement(array) {
  let newArray = [];
  let nStep = Number(array[array.length - 1]);
  for (let i = 0; i < array.length - 1; i += nStep) {
    newArray.push(array[i]);
  }
  console.log(newArray.join(" "));
}
printNthElement(["5", "20", "31", "4", "20", "5", "20",, "2"]);
printNthElement(['1', '2', '3', '4', '5', '6'])
