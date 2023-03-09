function matchDates(input) {
  let dates = input[0];
  let pattern = /\b\d{2}([-.\/])[A-Z][a-z]{2}\1\d{4}\b/g;
  let splitPattern = /[-.\/]/g;
  let validDates = dates.match(pattern);

  for (let date of validDates) {
    let [day, month, year] = date.split(splitPattern);
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}

matchDates([
  "13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016",
]);
