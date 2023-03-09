function solve(num1) {
    let xn = String(num1)
    switch (xn) {
        case "one": printLine = 1; break;
        case "two": printLine = 2; break;
        case "three": printLine = 3; break;
        case "four": printLine = 4; break;
        case "five": printLine = 5; break;
        case "six": printLine = 6; break;
        case "seven": printLine = 7; break;
        case "eight": printLine = 8; break;
        case "nine": printLine = 9; break;
        default: printLine = 0; break;
     } 
     console.log(printLine);
  }
  solve("one")