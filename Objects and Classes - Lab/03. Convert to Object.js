function convert(params) {
  let obj = JSON.parse(params);

  let objEntries = Object.entries(obj);

  for (const [key, value] of objEntries) {
    console.log(`${key}: ${value}`);
  }
}
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
