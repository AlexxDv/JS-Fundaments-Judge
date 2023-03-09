function solve(arr) {
  let allGuests = [];

  while (arr[0] !== "PARTY") {
    let guest = arr.shift();
    allGuests.push(guest);
  }

  arr.forEach((el) => {
    if (allGuests.includes(el)) {
      allGuests.splice(allGuests.indexOf(el), 1);
    }
  });

  let vips = allGuests.filter((el) => !isNaN(Number(el[0])));
  let regulars = allGuests.filter((el) => isNaN(Number(el[0])));

  let result = vips.concat(regulars);
  console.log(result.length);
  result.forEach((el) => console.log(el));
}

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
