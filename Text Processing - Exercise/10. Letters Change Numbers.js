function lettersChangeNumbers(text) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let elements = text.split(" ").filter((x) => x.length > 1);
  let result = 0;

  for (let elem of elements) {
    let elemArr = elem.split("");
    let firstLetter = elemArr.shift();
    let lastLetter = elemArr.pop();
    let number = Number(elemArr.join(""));
    let positionFirst = alph.indexOf(firstLetter.toLowerCase()) + 1;
    let positionSecond = alph.indexOf(lastLetter.toLowerCase()) + 1;

    if (firstLetter.charCodeAt(0) >= 65 && firstLetter.charCodeAt(0) <= 90) {
      number /= positionFirst;
    } else if (
      firstLetter.charCodeAt(0) >= 97 &&
      firstLetter.charCodeAt(0) <= 122
    ) {
      number *= positionFirst;
    }

    if (lastLetter.charCodeAt(0) >= 65 && lastLetter.charCodeAt(0) <= 90) {
      number -= positionSecond;
    } else if (
      lastLetter.charCodeAt(0) >= 97 &&
      lastLetter.charCodeAt(0) <= 122
    ) {
      number += positionSecond;
    }

    result += number;
  }

  console.log(result.toFixed(2));
}

lettersChangeNumbers("A12b s17G");
