function bombNumbers(sequence, bombNumber) {
  let numberToBomb = bombNumber[0];
  let power = bombNumber[1];

  while (sequence.includes(numberToBomb)) {
    let bombIndex = sequence.indexOf(numberToBomb);
    let startIndex = bombIndex - power;
    let elementsToRemove = power * 2 + 1;

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }

    sequence.splice(startIndex, elementsToRemove);
  }
  let sum = 0;

  for (let num of sequence) {
    sum += num;
  }

  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
