function triangleArea(a, b, c) {
  let semiPerimeter = (a + b + c) / 2;
  let area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
  );
  return area;
}
console.log(triangleArea(2, 3.5, 4));
