function distinctArray(input) {
  let uniqueElements = new Set();

  for (let el of input) {
    uniqueElements.add(el);
  }

  let text = "";
  for (let el of uniqueElements) {
    text += el + " ";
  }

  console.log(text);
}

distinctArray([1, 2, 3, 4]);
