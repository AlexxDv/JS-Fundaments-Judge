function spiceMustFlow(input) {
  let extracted = 0;
  let dayCounter = 0;

  while (input >= 100) {
    dayCounter++;
    extracted += input - 26;
    input -= 10;
  }
  console.log(dayCounter);
  if (dayCounter != 0) {
    console.log(extracted - 26);
  } else {
    console.log(extracted);
  }
}
spiceMustFlow(111);
spiceMustFlow(450);
