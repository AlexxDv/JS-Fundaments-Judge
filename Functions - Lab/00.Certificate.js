// self documenting code

function print(grade, name) {
  if (pass(grade)) {
    printHeader();
    printName(name);
    formatGrade(grade);
  } else {
    console.log("Student does not qualify");
  }
  function printHeader() {
    console.log(`~~~-   {@}   -~~~`);
    console.log(`~- Certificate -~`);
    console.log(`~~~-  ~---~  -~~~`);
  }
  function printName(nameArr) {
    console.log(`${nameArr[0]}  ${nameArr[1]}`);
  }
  function formatGrade(num) {
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
  function pass(grade) {
    return grade >= 3;
  }
}
print(5.25, ["John", "Smith"]);
