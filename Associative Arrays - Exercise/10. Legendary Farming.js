function legendaryFarming(input) {
  let GOAL = 250;
  let materials = input.split(" ");
  let junk = {};
  let isObtained = false;

  let materialsObj = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };

  while (materials.length > 0) {
    let quantity = Number(materials.shift());
    let material = materials.shift().toLowerCase();

    switch (material) {
      case "shards":
        materialsObj[material] += quantity;
        break;
      case "fragments":
        materialsObj[material] += quantity;
        break;
      case "motes":
        materialsObj[material] += quantity;
        break;
      default:
        if (!junk.hasOwnProperty(material)) {
          junk[material] = 0;
        }

        junk[material] += quantity;
    }

    let entries = Object.entries(materialsObj);

    for (let [key, value] of entries) {
      if (value >= 250) {
        let message = "";
        if (key === "shards") {
          message = "Shadowmourne";
        } else if (key === "fragments") {
          message = "Valanyr";
        } else if (key === "motes") {
          message = "Dragonwrath";
        }

        console.log(`${message} obtained!`);
        materialsObj[key] -= GOAL;
        isObtained = true;
        break;
      }
    }

    if (isObtained) {
      break;
    }
  }

  Object.entries(materialsObj)
    .sort(
      ([materialA, valueA], [materialB, valueB]) =>
        valueB - valueA || materialA.localeCompare(materialB)
    )
    .forEach(([material, value]) => {
      console.log(`${material}: ${value}`);
    });

  Object.keys(junk)
    .sort((keyA, keyB) => keyA.localeCompare(keyB))
    .forEach((key) => {
      console.log(`${key}: ${junk[key]}`);
    });
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
