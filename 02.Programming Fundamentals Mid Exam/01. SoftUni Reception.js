function solve(input) {
  /* 
  let [worker1, worker2, worker3, students] = input.map(Number);
  let time = 0;
  while (students > 0) {
    time++;
    if (time % 4 != 0) {
      students -= (worker1 + worker2 + worker3);
    }
  }  
  */
  let worker1 = Number(input.shift());
  let worker2 = Number(input.shift());
  let worker3 = Number(input.shift());
  let students = Number(input.shift());
  let time = 0;
  let efficiency = worker1 + worker2 + worker3;

  while (students > 0) {
    time++;
    if (time % 4 != 0) {
      students -= efficiency;
    }
  }

  console.log(`Time needed: ${time}h.`);
}
solve(["5", "6", "4", "20"]);
solve(["1", "2", "3", "45"]);
