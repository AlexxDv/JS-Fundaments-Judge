function cityPr(city) {
  let cityEntries = Object.entries(city);

  for (let [cityKey, cityValue] of cityEntries) {
    console.log(`${cityKey} -> ${cityValue}`);
  }
}
/* function cityPr(city) {
    let cityEntries = Object.keys(city)

    for (let key of cityKeys) {
        console.log(`${key} -> ${city[key]}`)
    }
}
 */

cityPr({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
