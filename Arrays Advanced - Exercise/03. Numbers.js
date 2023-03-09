function numbersTask(input) {
  let numbers = input.split(" ").map(Number);
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;

  let biggerNums = numbers.filter((num) => num > average);
  biggerNums = biggerNums.sort((a, b) => b - a);
  biggerNums = biggerNums.slice(0, 5);
  if (biggerNums.length === 0) {
    console.log("No");
  } else {
    console.log(biggerNums.join(" "));
  }
}
numbersTask("10 20 30 40 50");
numbersTask("5 2 3 4 -10 30 40 50 20 50 60 60 51");
