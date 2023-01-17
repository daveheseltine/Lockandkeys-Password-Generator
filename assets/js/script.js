// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {
  let i = true;
  while (true) {
    optionLength = prompt("Please enter the desired length of your password, between 10-64 Characters:");
    // This method allows the cancel button to stop the function early, reducing possible frustration for the user:
    if (optionLength === null) {
      return false;
    // Check for valid inputs:
    } else if (optionLength === "") {
      alert("That is not a number! Please try again!");
    } else if (isNaN(optionLength)) {
      alert("That is not a number! Please try again!");
    } else if (parseInt(optionLength) < 10) {
      alert("That is too short! Please try again!");
    } else if (parseInt(optionLength) > 64) {
      alert("That is too long! Please try again!");
    // Select arrays to generate the character set:
    } else while (i === true) {
      var optionLowerCase = confirm("Would you like to include Lowercase characters?");
      var optionUpperCase = confirm("Would you like to include Uppercase characters?");
      var optionNumeric = confirm("Would you like to include Numeric characters?");
      var optionSpecial = confirm("Would you like to include Special characters ($@%&*, etc)?");
      // This method allows the cancel button to stop the function early, reducing possible frustration for the user:
      if (optionLowerCase === false && optionUpperCase === false && optionNumeric === false && optionSpecial === false) {
        i = confirm("Please select at least one character type!");
      } else {
        // Concat arrays to generate the character set:
        var charSet = [];
        if (optionLowerCase === true) {
          charSet = charSet.concat(lowerCasedCharacters);
        }
        if (optionUpperCase === true) {
          charSet = charSet.concat(upperCasedCharacters);
        }
        if (optionNumeric === true) {
          charSet = charSet.concat(numericCharacters);
        }
        if (optionSpecial === true) {
          charSet = charSet.concat(specialCharacters);
        }
        return [parseInt(optionLength), charSet];
      }
    // This method allows the cancel button to stop the function early, reducing possible frustration for the user:  
      if (i === false) {
        return false;
      }
    }
  }
}

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// // Function to generate password with user input
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);