function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalExp = 0;
  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 == 0) {
      totalExp += helmetPrice;
    }
    if (i % 3 == 0) {
      totalExp += swordPrice;
    }
    if (i % 6 == 0) {
      totalExp += shieldPrice;
    }
    if (i % 12 == 0) {
      totalExp += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${totalExp.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
