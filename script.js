// Character sets
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{};~?,./";

// Main function
function generatePass() {
  // Get user selections
  let length = parseInt(document.querySelector("#length").value);
  let includeUppercase = document.querySelector("#includeUppercase").checked;
  let includeNumbers = document.querySelector("#includeNumbers").checked;
  let includeSymbols = document.querySelector("#includeSymbols").checked;

  // Start with lowercase letters
  let charSet = lowerChars;

  if (includeUppercase) charSet += upperChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSymbols) charSet += symbolChars;

  // Create password
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  // Display password in the output field
  document.querySelector("#password").value = password;
}

// Add event listener to button
document.querySelector("#generateBtn").addEventListener("click", generatePass);
