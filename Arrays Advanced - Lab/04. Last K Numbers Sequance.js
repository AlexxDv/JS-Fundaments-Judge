function lastKNums(n, k) {
  let result = [1];

  for (let i = 0; i < n - 1; i++) {
    let lastK = result.slice(-k);
    let sum = 0;
    for (let element of lastK) {
      sum += element;
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}
lastKNums(6, 3);
lastKNums(8, 2);
