function sumFirstAndLast (input) {
    let first = input.shift();
    let last = input.pop();

console.log(Number(first) + Number(last));
}
sumFirstAndLast(['20', '30', '40'])