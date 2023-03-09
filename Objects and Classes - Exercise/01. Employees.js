function employess(array) {
  for (const employeeName of array) {
    let singlePerson = {
      name: employeeName,
      personalNum: employeeName.length,
    };
    console.log(
      `Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNum}`
    );
  }
//   array.forEach((el) =>console.log(`Name: ${el} -- Personal Number: ${el.length}`));
}
employess([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
    