function smalestTwoNum(nums) {
  return nums
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");
}
console.log(smalestTwoNum([30, 15, 50, 5]));
console.log(smalestTwoNum([3, 0, 10, 4, 7, 3]));
