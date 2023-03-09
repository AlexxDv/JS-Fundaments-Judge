function bonus(input) {
  let studentCount = Number(input.shift());
  let lectureCount = Number(input.shift());
  let initialBonus = Number(input.shift());
  let students = input.map(Number);
  students = students.sort((a, b) => b - a);
  let maxLectures = students.shift();
  let maxBonus = (maxLectures / lectureCount) * (5 + initialBonus);
  maxBonus = Math.ceil(maxBonus);

  if (studentCount === 0) {
    console.log(`Max Bonus: 0.`);
    console.log(`The student has attended 0 lectures.`);
  } else {
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxLectures} lectures.`);
  }
}
bonus(["5", "25", "30", "12", "19", "24", "16", "20"]);
