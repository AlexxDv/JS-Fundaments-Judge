function sumOfOddNum(num){
    let sum = 0;
    let result = 1
    for (let i = 1; i <= num; i++){
        console.log(result);
        sum += result
        result += 2
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNum(5);
sumOfOddNum(3);