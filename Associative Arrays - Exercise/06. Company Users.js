function companyUsers(input) {
  let companies = new Map();

  input.forEach((elem) => {
    let [company, id] = elem.split(" -> ");

    if (!companies.has(company)) {
      companies.set(company, new Set());
    }

    companies.get(company).add(id);
  });

  Array.from(companies)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([company, employees]) => {
      console.log(company);
      Array.from(employees).forEach((employee) => {
        console.log(`-- ${employee}`);
      });
    });
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
