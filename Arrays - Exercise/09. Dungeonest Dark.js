function dungeonestDark(params) {
  let newRooms = params[0].split("|б");
  console.log(newRooms);
  let health = 100;
  let gold = 0;
  let diff = 0;

  for (let i = 0; i < newRooms.length; i++) {
    let room = newRooms[i].split(" ");
    let gameNum = Number(room[1]);

    if (room[0] === "potion") {
      health += gameNum;
      diff = gameNum;

      if (health > 100) {
        diff = 100 - health + gameNum;
        health = 100;
      }
      console.log(`You healed for ${diff} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (room[0] === "chest") {
      console.log(`You found ${gameNum} coins.`);
      gold += gameNum;
    } else {
      health -= gameNum;
      if (health <= 0) {
        console.log(`You died! Killed by ${room[0]}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      } else {
        console.log(`You slayed ${room[0]}.`);
      }
    }
  }
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${gold}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
