function solve(day, age) {
  let type;
  let price = 0;
  if (age >= 0 && age <= 18) {
    type = "kid";
  } else if (age > 18 && age <= 64) {
    type = "normal";
  } else if (age > 64 && age <= 122) {
    type = "older";
  }
  switch (type) {
    case "kid":
      switch (day) {
        case "Weekday":
          price = 12;
          break;
        case "Weekend":
          price = 15;
          break;
        case "Holiday":
          price = 5;
          break;
      }
      break;
    case "normal":
      switch (day) {
        case "Weekday":
          price = 18;
          break;
        case "Weekend":
          price = 20;
          break;
        case "Holiday":
          price = 12;
          break;
      }
      break;
    case "older":
      switch (day) {
        case "Weekday":
          price = 12;
          break;
        case "Weekend":
          price = 15;
          break;
        case "Holiday":
          price = 10;
          break;
      }
      break;
  }
  if (price === 0) {
    console.log("Error!");
  } else {
    console.log(`${price}$`);
  }
}
solve("Weekday", 42);
solve("Holiday", -12);
solve("Holiday", 15);
