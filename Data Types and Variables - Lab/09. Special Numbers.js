function specialNum(n) {
  for (let num = 1; num <= n; num++) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]);
    }
    let special = false;
    if (sum == 5 || sum == 7 || sum == 11) {
      special = true;
    }
    console.log(special ? `${num} -> True` : `${num} -> False`);
  }
}
specialNum(30);
