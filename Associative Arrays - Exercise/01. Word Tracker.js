function wordTracker(input) {
  let words = input.shift().split(" ");
  let tracker = new Map();

  words.forEach((word) => {
    let counter = 0;

    input.forEach((wordToCheck) => {
      if (wordToCheck === word) {
        counter++;
      }
    });

    tracker.set(word, counter);
  });

  Array.from(tracker)
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, occurrences]) => {
      console.log(`${word} - ${occurrences}`);
    });
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
