// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var doYouWant= confirm("Do you want")
  
  return "password"
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Example: Generate a random password of length 12
const password = generateRandomPassword(12);
console.log(password);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
