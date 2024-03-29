function meetings(input) {
  const meetings = {};

  input.forEach((elem) => {
    let [weekday, name] = elem.split(" ");

    if (meetings.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meetings[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    }
  });

  for (let [key, value] of Object.entries(meetings)) {
    console.log(`${key} -> ${value}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
