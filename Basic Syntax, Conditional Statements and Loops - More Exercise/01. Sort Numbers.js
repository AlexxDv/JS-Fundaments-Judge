function solve(num1, num2, num3) {
  let n1 = Number(num1);
  let n2 = Number(num2);
  let n3 = Number(num3);

  if (n1 >= n2 && n1 >= n3 && n2 >= n3) {
    console.log(n1);
    console.log(n2);
    console.log(n3);
  } else if (n1 >= n2 && n1 >= n3 && n2 <= n3) {
    console.log(n1);
    console.log(n3);
    console.log(n2);
  } else if (n2 >= n1 && n2 >= n3 && n1 >= n3) {
    console.log(n2);
    console.log(n1);
    console.log(n3);
  } else if (n2 >= n1 && n2 >= n3 && n1 <= n3) {
    console.log(n2);
    console.log(n3);
    console.log(n1);
  } else if (n3 >= n1 && n3 >= n2 && n1 >= n2) {
    console.log(n3);
    console.log(n1);
    console.log(n2);
  } else if (n3 >= n1 && n3 >= n2 && n1 <= n2) {
    console.log(n3);
    console.log(n2);
    console.log(n1);
  }
}
solve(2,4,8)