function vacation(num, type, day) {
  num = Number(num);
  type = String(type);
  day = String(day);
  price = 0;

  switch (day) {
    case "Friday":
      switch (type) {
        case "Students":
          price = 8.45;
          break;
        case "Business":
          price = 10.9;
          break;
        case "Regular":
          price = 15;
          break;
      }
      break;
    case "Saturday":
      switch (type) {
        case "Students":
          price = 9.8;
          break;
        case "Business":
          price = 15.6;
          break;
        case "Regular":
          price = 20;
          break;
      }
      break;
    case "Sunday":
      switch (type) {
        case "Students":
          price = 10.46;
          break;
        case "Business":
          price = 16;
          break;
        case "Regular":
          price = 22.5;
          break;
      }
      break;
  }
  if (type == "Students" && num >= 30) {
    price *= 0.85;
  }
  if (type == "Business" && num >= 100) {
    num -= 10;
  }
  if (type == "Regular" && num >= 10 && num <= 20) {
    price *= 0.95;
  }
  let total = (price * num).toFixed(2);
  console.log(`Total price: ${total}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
