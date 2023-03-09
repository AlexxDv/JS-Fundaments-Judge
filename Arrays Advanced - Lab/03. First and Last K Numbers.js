function firsAndLast(array) {
    let k = array.shift();

    let firstK = array.slice(0, k);
    let lastK = array.slice(-k);

    console.log(firstK.join(" "));
    console.log(lastK.join(" "));  
    
}
firsAndLast([2, 7, 8, 9]);
firsAndLast([3, 6, 7, 8, 9]);
