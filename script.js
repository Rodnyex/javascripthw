// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function GeneratePassword() {
  var length= 8;
  var passwordset = "abcdefghijklmnopqrstuvwxyz0123456789";
  var numbers = random.randint(0, 9);
  var chooser = 

  for (var i = 0, n = passwordset.length; i < length; ++i) {
    retVal += passwordset.charAt(Math.floor(Math.random() * 10));

   

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard(event) {
  // BONUS 
  event.preventDefault();
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
closeEl.addEventListener("click", close);
