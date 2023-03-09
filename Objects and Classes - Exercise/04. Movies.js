function solve(input) {
  let movies = [];

  for (const line of input) {
    if (line.includes("addMovie")) {
      console.log(line);
      line.shift();
      console.log(line);
    }
  }
}
solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
