function printAndSum(startNum, endNum) {
  let sum = 0;
  let numToStr = "";
  for (let i = startNum; i <= endNum; i++) {
    numToStr += i + " ";
    sum += i;
  }
  console.log(numToStr);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
