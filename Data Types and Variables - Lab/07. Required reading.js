function requiredReading(num1, num2, num3) {
  let totalPages = Number(num1);
  let pagesPerHour = Number(num2);
  let daysForReading = Number(num3);

  let neededTime = totalPages / pagesPerHour;
  let neededHours = neededTime / daysForReading;

  console.log(neededHours);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
