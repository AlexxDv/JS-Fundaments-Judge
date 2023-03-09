function repeatString(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
    return newStr;
}
console.log(repeatString("abc", 5));;

