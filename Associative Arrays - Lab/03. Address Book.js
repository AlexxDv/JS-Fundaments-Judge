function addressBook(input) {
  let addressInfo = {};

  input.forEach((elem) => {
    let [name, address] = elem.split(":");
    addressInfo[name] = address;
  });

  Object.keys(addressInfo)
    .sort((a, b) => a.localeCompare(b))
    .forEach((key) => {
      console.log(`${key} -> ${addressInfo[key]}`);
    });
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
