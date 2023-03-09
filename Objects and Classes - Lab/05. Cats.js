function cats(array) {
  class Cat {
    constructor(name, age) {
      (this.name = name),
        (this.age = age),
        (this.meow = () => {
          console.log(`${this.name}, age ${this.age} says Meow`);
        });
    }
  }
  // let cats = [];
  for (let currStr of array) {
    let currData = currStr.split(" ");
    let currCat = new Cat(currData[0], currData[1]);
    currCat.meow();
    // cats.push(currCat);
  }
  //   for (let c of cats) {
  //     c.meow();
  //   }
  //   cats.forEach((x) => x.meow());
}
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
