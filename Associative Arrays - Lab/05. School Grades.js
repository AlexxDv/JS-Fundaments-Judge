function schoolGrades(input) {
  let map = new Map();

  input.forEach((elem) => {
    let tokens = elem.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (!map.has(name)) {
      map.set(name, grades);
    } else {
      let existingGrades = map.get(name);
      grades.forEach((x) => existingGrades.push(x));
    }
  });

  let sorted = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, grades] of sorted) {
    let avgGrade = 0;
    grades.forEach((x) => (avgGrade += x));
    avgGrade /= grades.length;

    console.log(`${name}: ${avgGrade.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
