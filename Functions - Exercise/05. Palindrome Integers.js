function palindrome(array) {

  function palindromeChecker(num) {
    let reversedNum = Number(num.toString().split("").reverse().join(""));
    if (num === reversedNum) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i <array.length; i++) {
      let currNum = array[i];
      console.log(palindromeChecker(currNum));
  }
}

palindrome([123,323,421,121])
