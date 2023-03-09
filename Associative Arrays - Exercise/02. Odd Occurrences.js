function oddOccurrences(input) {
  let items = input.split(" ").map((item) => item.toLowerCase());

  let oddItems = new Set();

  items.forEach((item) => {
    let counter = 0;

    items.forEach((itemToCheck) => {
      if (itemToCheck === item) {
        counter++;
      }
    });

    if (counter % 2 !== 0) {
      oddItems.add(item);
    }
  });

  console.log(Array.from(oddItems).join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
