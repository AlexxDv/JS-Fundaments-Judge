function signCheck(a, b, c) {
  let negative = 0;
  let arr = [a, b, c];
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === -1) {
      negative++;
    }
  }

  if (negative % 2 === 0) {
    console.log(`Positive`);
  } else {
    console.log(`Negative`);
  }
}

signCheck(10, 5, -20);
signCheck(10, -5, -20);
