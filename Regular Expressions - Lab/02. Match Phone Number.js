function matchPhoneNumber(input) {
  let phoneNumbers = input[0];
  let pattern = /\+359( |-)2\1(\d{3})\1(\d{4})\b/g;
  let validPhones = phoneNumbers.match(pattern);
  console.log(validPhones.join(", "));
}

matchPhoneNumber([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
