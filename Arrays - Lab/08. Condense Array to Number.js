function condenseArray(arr) {
  let condence = [];
  for (let n of arr) {
    condence.push(n);
  }

  while (condence.length > 1) {
    let temp = [];
    for (let i = 0; i < condence.length - 1; i++) {
      temp.push(condence[i] + condence[i + 1]);
    }
    condence = temp;
  }
  console.log(condence[0]);
}
condenseArray([5, 0, 4, 1, 2]);
