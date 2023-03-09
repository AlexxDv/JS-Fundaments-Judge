function solve(num1) {
    let n1 = String(num1);
    // let x = n1 % 10;
    let x = n1.charAt(n1.length-1)
    let xn = Number(x)
    let printLine = "";
    switch (xn) {
        case 1: printLine = "one"; break;
        case 2: printLine = "two"; break;
        case 3: printLine = "three"; break;
        case 4: printLine = "four"; break;
        case 5: printLine = "five"; break;
        case 6: printLine = "six"; break;
        case 7: printLine = "seven"; break;
        case 8: printLine = "eight"; break;
        case 9: printLine = "nine"; break;
        default: printLine = "zero"; break;
     } 
     console.log(printLine);
  }
  solve(241)