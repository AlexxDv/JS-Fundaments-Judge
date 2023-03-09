function extractEmails(input) {
  let emailPattern =
    /(?<user> [A-Za-z0-9]+[-.\w]*)@(?<host>[a-zA-Z-]+\.[A-Za-z-]+[A-Za-z-.]*)\b/g;

  let validEmails = input.match(emailPattern).map((email) => email.trim());

  console.log(validEmails.join("\n"));
}

extractEmails("Please contact us at: support@github.com.");
