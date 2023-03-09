function process(arr) {
    //   let filtered = arr.filter((x, i) => i % 2 == 1);
    //   let doubled = filtered.map((x) => x * 2);
    //   let result = doubled.reverse();
    //   console.log(result.join(" "));
  
    console.log(
      arr
        .filter((x, i) => i % 2 == 1)
        .map((x) => x * 2)
        .reverse()
        .join(" ")
    );
  }
  
  process([10, 15, 20, 25]);
  