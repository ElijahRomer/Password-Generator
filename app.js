const charSets = {
  lowChar:'abcdefghijklmnopqrstuvwxyz',
  upChar:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numChar:'1234567890',
  specChar:'!"@#$%^&*/+?,{~}|[]<>=:;.()-',
};

let userCharString = "";
let passwordLengthResponse;
let passwordOutput = "";

// BUTTON EVENT LISTENER
document.getElementById('submit').addEventListener('click', generatePassword);

function generatePassword () {
  userCharString = "";
  passwordOutput = "";
  howLongDoYouWantYourPassword();
  generatePasswordString();
  randomizer();
  document.getElementById('passwordOutput').value = passwordOutput;
}

// ****GET PASSWORD LENGTH****
function howLongDoYouWantYourPassword() {
  passwordLengthResponse = prompt("Enter Desired Length of password, between 8 and 128 characters.");
  passwordLengthResponse = parseInt(passwordLengthResponse);
  //invalid characters
  if (isNaN(passwordLengthResponse) == true){
    alert('Please enter only numerical integer values.');
    howLongDoYouWantYourPassword();
  } 
  //invalid length
  if (passwordLengthResponse < 8) {    
    alert('Password length must be greater than 8.');
  howLongDoYouWantYourPassword();
  } else if (passwordLengthResponse > 128) {
    alert('Password length must be less than 128.');
  howLongDoYouWantYourPassword();}
  //input accepted
  alert(`Password length set to ${passwordLengthResponse} characters.`)
  return passwordLengthResponse
};

//GENERATE PASSWORD STRING
function generatePasswordString(){
  let lowCharResponse = confirm('Do you want to include lower case letters?');
      if (lowCharResponse == true) {
        userCharString = userCharString + charSets.lowChar;
        alert(`Lower case characters will be included.`);
      } else {
        alert(`Lower case characters will NOT be included.`);
      };
  let upCharResponse = confirm('Do you want to include upper case letters?');
      if (upCharResponse == true) {
        userCharString = userCharString + charSets.upChar;
        alert(`Upper case characters will be included.`);
      } else {
        alert(`Upper case characters will NOT be included.`);
      };
  let numCharResponse = confirm('Do you want to include numbers?');
      if (numCharResponse == true) {
        userCharString = userCharString + charSets.numChar;
        alert(`Numeric (0-9) characters will be included.`);
      } else {
        alert(`Numeric (0-9) characters will NOT be included.`);
      };
  let specCharResponse = confirm('Do you want to include special characters?');
      if (specCharResponse == true) {
        userCharString = userCharString + charSets.specChar;
        alert(`Special characters will be included.`);
      } else {
        alert(`Special characters will NOT be included.`);
      };
//if no characters selected
if (userCharString == ''){
    alert('User must make at least one selection for included characters.');
    generatePasswordString();
  } else {

    return userCharString;

  }
};

//GENERATE RANDOM STRING FROM USER INPUTS
  function randomizer(){
    
    for(i = 0; i < passwordLengthResponse; i++){
      let singlePasswordCharacter;
      singlePasswordCharacter = userCharString[Math.floor(Math.random()*userCharString.length)];

      passwordOutput = passwordOutput + singlePasswordCharacter;
  };
}
