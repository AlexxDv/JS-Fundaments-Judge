function addAndSubstract(n1, n2, n3) {
    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    let substract = (addResilt, thirdNum) => addResilt - thirdNum
    let result = add(n1, n2);
    let finalResult = substract(result, n3);
    console.log(finalResult);
}
addAndSubstract(23, 6, 10);