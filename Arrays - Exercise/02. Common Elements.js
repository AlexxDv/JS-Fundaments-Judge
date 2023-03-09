function commonElements(array1, array2) {
  for (let char1 of array1) {
    for (let char2 of array2) {
      if (char1 === char2) {
        console.log(char1);
      }
    }
  }
}
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
