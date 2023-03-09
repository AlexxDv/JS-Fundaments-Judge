function sumDigits(num) {
    let sum = 0;
    let numToStr = String(num);

    for (let char of numToStr) {
        sum += Number(char)
    }
    console.log(sum);
}
sumDigits(245678)