function grade(num) {
  if (num < 3) {
    console.log("Fail (2)");
  } else if (num < 3.5) {
    console.log(`Poor (${num.toFixed(2)})`);
  } else if (num < 4.5) {
    console.log(`Good (${num.toFixed(2)})`);
  } else if (num < 5.5) {
    console.log(`Very good (${num.toFixed(2)})`);
  } else {
    console.log(`Excellent (${num.toFixed(2)})`);
  }
}
grade(3.33);
grade(4.499);
grade(2.99);
