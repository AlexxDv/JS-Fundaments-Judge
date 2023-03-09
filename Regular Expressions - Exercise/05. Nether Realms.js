function netherRealms(str) {
  let demons = str.split(/[, ]+/g).sort((a, b) => a.localeCompare(b));

  let healthPattern = /[^0-9+*/.-]/g;
  let damagePattern = /-?[\d.]+/g; // integer or decimal (optional negative)
  let checkPattern = /[*/]/;

  for (let demon of demons) {
    let health = demon
      .match(healthPattern)
      .reduce((a, b) => a + b.charCodeAt(), 0);

    let damage = 0;
    let numbers = demon.match(damagePattern);

    if (numbers) {
      damage = numbers.map(Number).reduce((a, b) => a + b);

      if (checkPattern.test(demon)) {
        for (let letter of demon) {
          if (letter === "*") {
            damage *= 2;
          } else if (letter === "/") {
            damage /= 2;
          }
        }
      }
    }

    console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
  }
}

netherRealms("M3ph-0.5s-0.5t0.0**");
