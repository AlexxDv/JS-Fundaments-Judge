function piccolo(input) {
  let parkingLot = new Set();

  input.forEach((elem) => {
    let [command, carNumber] = elem.split(", ");

    switch (command) {
      case "IN":
        parkingLot.add(carNumber);
        break;
      case "OUT":
        parkingLot.delete(carNumber);
        break;
      default:
        console.log("No such command!");
        break;
    }
  });

  if (parkingLot.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sortedParking = Array.from(parkingLot).sort((a, b) =>
      a.localeCompare(b)
    );

    console.log(sortedParking.join("\n"));
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
