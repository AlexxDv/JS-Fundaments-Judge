
// function reversedChar(char1, char2, char3) {
//   console.log(`${char3} ${char2} ${char1}`);
// }

function reversedChar(...params){
console.log(params.reverse().join(" "));
}

reversedChar("A", "B", "C");
