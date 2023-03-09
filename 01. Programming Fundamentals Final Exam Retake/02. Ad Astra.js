function adAstra(input) {
  let CALORIES_PER_DAY = 2000;
  let text = input[0];
  let pattern =
    /([|#])(?<item>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let foodInfo = [];
  let totalCalories = 0;
  let validFoodInfo;

  while ((validFoodInfo = pattern.exec(text)) !== null) {
    let itemName = validFoodInfo.groups.item;
    let expirationDate = validFoodInfo.groups.expirationDate;
    let calories = Number(validFoodInfo.groups.calories);

    foodInfo.push({
      itemName,
      expirationDate,
      calories,
    });

    totalCalories += calories;
  }

  let daysToLast = Math.floor(totalCalories / CALORIES_PER_DAY);
  console.log(`You have food to last you for: ${daysToLast} days!`);

  if (foodInfo.length === 0) return;

  foodInfo.forEach((obj) => {
    console.log(
      `Item: ${obj.itemName}, Best before: ${obj.expirationDate}, Nutrition: ${obj.calories}`
    );
  });
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
