function phoneBook(input) {
  let phoneBook = {};

  input.forEach((elem) => {
    let [name, phone] = elem.split(" ");
    phoneBook[name] = phone;
  });

  for (let [key, value] of Object.entries(phoneBook)) {
    console.log(`${key} -> ${value}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
