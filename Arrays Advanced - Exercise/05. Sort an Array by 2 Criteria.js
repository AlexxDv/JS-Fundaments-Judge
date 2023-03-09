function sortAnArray(array) {

    let sorted = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join("\n"));
}
sortAnArray(["alpha", "beta", "gamma"]);
sortAnArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
