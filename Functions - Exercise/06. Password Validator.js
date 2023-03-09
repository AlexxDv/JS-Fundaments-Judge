function passwordValidator(password) {
  function isLenghtEnougt(password) {
    return password.length >= 6 && password.length <= 10;
  }
  function isLettersAndDig(password) {
    for (let charIndex of password) {
      let currChar = charIndex.charCodeAt(0);
      if (
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122) &&
        !(currChar >= 48 && currChar <= 57)
      ) {
        return false;
      }
    }
    return true;
  }
  function twoDigits(password) {
    let counter = 0;
    for (let charIndex of password) {
      let currChar = charIndex.charCodeAt(0);
      if (currChar >= 48 && currChar <= 57) {
        counter++;
      }
    }
    return counter >= 2;
  }
  let isLenght = isLenghtEnougt(password);
  let digits = isLettersAndDig(password);
  let two = twoDigits(password);
  if (isLenght && digits && two) {
    console.log("Password is valid");
  }
  if (!isLenght) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!digits) {
    console.log("Password must consist only of letters and digits");
  }
  if (!two) {
    console.log("Password must have at least 2 digits");
  }
}
passwordValidator("logIn");
