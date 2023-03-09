function cardGame(input) {
  let cardPower = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let cardType = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };

  let players = new Map();

  input.forEach((elem) => {
    let [name, deckToSplit] = elem.split(": ");
    let deck = deckToSplit.split(", ");

    if (!players.has(name)) {
      players.set(name, new Set(deck));
    } else {
      let currentDeck = players.get(name);

      deck.forEach((card) => {
        currentDeck.add(card);
      });

      players.set(name, currentDeck);
    }
  });

  let entries = [...players];

  for (let [name, deck] of entries) {
    let totalPoints = Array.from(deck)
      .map((card) => cardPower[card[0]] * cardType[card[card.length - 1]])
      .reduce((a, b) => a + b, 0);

    console.log(`${name}: ${totalPoints}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
