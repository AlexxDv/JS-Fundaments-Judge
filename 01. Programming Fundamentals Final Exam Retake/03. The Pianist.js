function thePianist(input) {
  let pieces = Number(input.shift());
  let pianists = {};

  for (let i = 0; i < pieces; i++) {
    let [piece, composer, key] = input.shift().split("|");

    pianists[piece] = {
      composer,
      key,
    };
  }

  function add(obj, piece, composer, key) {
    if (!obj.hasOwnProperty(piece)) {
      obj[piece] = {
        composer,
        key,
      };
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    } else {
      console.log(`${piece} is already in the collection!`);
    }
  }

  function remove(obj, piece) {
    if (obj.hasOwnProperty(piece)) {
      delete obj[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  function changeKey(obj, piece, newKey) {
    if (obj.hasOwnProperty(piece)) {
      obj[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  for (let elem of input) {
    if (elem === "Stop") break;

    let [command, piece, ...rest] = elem.split("|");

    switch (command) {
      case "Add":
        let composer = rest[0];
        let key = rest[1];
        add(pianists, piece, composer, key);
        break;
      case "Remove":
        remove(pianists, piece);
        break;
      case "ChangeKey":
        let newKey = rest[0];
        changeKey(pianists, piece, newKey);
        break;
      default:
        console.log("No such command!");
        continue;
    }
  }

  Object.entries(pianists).forEach(([piece, obj]) => {
    console.log(`${piece} -> Composer: ${obj.composer}, Key: ${obj.key}`);
  });
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
