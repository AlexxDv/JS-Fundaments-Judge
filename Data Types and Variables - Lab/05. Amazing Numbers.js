// function amazingNum(num) {
//   let result = 0;
//   let numAsString = String(num);

//   for (let i = 0; i < numAsString.length; i++) {
//     result += Number(numAsString[i]);
//   }

//   let resultAsString = String(result);

//   let special = false;

//   for (let i = 0; i < resultAsString.length; i++) {
//     if (resultAsString[i] == "9") {
//       special = true;
//     }
//   }
//   console.log(`${num} Amazing? ${special ? "True" : "False"}`);
// }

function amazingNum(num) {
  num = num.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  let result = sum.toString().includes("9");
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNum(1233);
