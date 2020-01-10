// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function GeneratePassword() {
  var length= 10;
  var passwordset = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0, n = passwordset.length; i < length; ++i) {
    retVal += passwordset.charAt(Math.floor(Math.random() * 10));
    
    var password = event.password.toLowercase();


  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard(event) {
  // BONUS 
  event.preventDefault();
  var 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
closeEl.addEventListener("click", close);