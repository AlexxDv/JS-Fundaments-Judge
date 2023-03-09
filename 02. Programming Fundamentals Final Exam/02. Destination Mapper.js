function destinationMapper(str) {
  let pattern = /([=/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
  let destinations = [];
  let sum = 0;
  let validLocation;

  while ((validLocation = pattern.exec(str)) !== null) {
    let location = validLocation.groups.name;
    destinations.push(location);
    sum += location.length;
  }

  console.log("Destinations:", destinations.join(", "));
  console.log("Travel Points:", sum);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
