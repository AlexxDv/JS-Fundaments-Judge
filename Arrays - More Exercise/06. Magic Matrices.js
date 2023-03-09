function magicMatrices(input) {
  let sumColumn = input[0][0] + input[1][0] + input[2][0];
  let sumColumn1 = input[0][1] + input[1][1] + input[2][1];
  let sumColumn2 = input[0][2] + input[1][2] + input[2][2];

  let sumRow = input[0][0] + input[0][1] + input[0][2];
  let sumRow1 = input[1][0] + input[1][1] + input[1][2];
  let sumRow2 = input[2][0] + input[2][1] + input[2][2];

  if (
    sumColumn == sumColumn1 &&
    sumColumn1 == sumColumn2 &&
    sumRow == sumRow1 &&
    sumRow1 == sumRow2 && sumRow == sumColumn
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
