function countOcc(str, word) {
    let textArr = str.split(" ");
    let count = textArr.filter(x=>x==word).length;
    console.log(count);
}
countOcc("This is a word and it also is a sentence", "is");
