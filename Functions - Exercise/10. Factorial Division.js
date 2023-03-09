function division(num1, num2) {
  function divisionCalc(num) {
    let result = 1;
    while (num != 1) {
      result *= num;
      num -= 1;
    }
    return result;
  }
  let finalResult = divisionCalc(num1) / divisionCalc(num2);
  console.log(finalResult.toFixed(2));
}
division(5, 2);
