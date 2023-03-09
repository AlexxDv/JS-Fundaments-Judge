function starEnigma(input) {
  let messages = Number(input.shift());
  let letters = ["s", "t", "a", "r"];
  let attackedPlanets = [];
  let destroyedPlanets = [];

  let decryptedPattern =
    /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*\->(?<soldiers>\d+)/;

  for (let i = 0; i < messages; i++) {
    let currentMessage = input[i];
    let occurrences = 0;

    currentMessage
      .toLowerCase()
      .split("")
      .forEach((letter) => {
        if (letters.includes(letter)) {
          occurrences++;
        }
      });

    let decryptedMessage = currentMessage
      .split("")
      .map((letter) => String.fromCharCode(letter.charCodeAt() - occurrences))
      .join("");

    let validMessage = decryptedPattern.exec(decryptedMessage);

    if (!validMessage) continue;

    let planet = validMessage.groups.planet;
    let attackType = validMessage.groups.attackType;

    if (attackType === "A") {
      attackedPlanets.push(planet);
    } else if (attackType === "D") {
      destroyedPlanets.push(planet);
    }
  }

  let output = (arr) => {
    if (arr.length !== 0) {
      arr
        .sort((a, b) => a.localeCompare(b))
        .forEach((planet) => console.log(`-> ${planet}`));
    }
  };

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  output(attackedPlanets);

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  output(destroyedPlanets);
}

starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
