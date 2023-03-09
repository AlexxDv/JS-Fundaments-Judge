function arrayManipulation(nums, commands) {
  for (let i = 0; i < commands.length; i++) {
    let currentValue = commands[i].split(" ");
    let currentCommand = currentValue.shift();
    currentValue = currentValue.map(Number);
    let sumPairs = 0;
    let sumPairsArr = [];

    switch (currentCommand) {
      case "add":
        let indexToAdd = currentValue[0];
        let elementToAdd = currentValue[1];
        nums.splice(indexToAdd, 0, elementToAdd);
        break;
      case "addMany":
        let indexToAddMany = currentValue.shift();
        nums.splice(indexToAddMany, 0, ...currentValue);
        break;
      case "contains":
        console.log(nums.indexOf(currentValue[0]));
        break;
      case "remove":
        let indexToRemove = currentValue[0];
        nums.splice(indexToRemove, 1);
        break;
      case "shift":
        let rotation = currentValue[0];
        for (let i = 0; i < rotation; i++) {
          let remove = nums.shift();
          nums.push(remove);
        }
        break;
      case "sumPairs":
        if (nums.length % 2 !== 0) {
          nums.push(0);
        }
        for (let i = 0; i < nums.length; i += 2) {
          sumPairs = nums[i] + nums[i + 1];
          sumPairsArr.push(sumPairs);
        }
        nums = [...sumPairsArr];
        break;
      case "print":
        console.log(`[ ${nums.join(", ")} ]`);
        break;
    }
  }
}
arrayManipulation(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
