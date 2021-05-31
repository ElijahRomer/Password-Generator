const charSets = {
  lowChar:'abcdefghijklmnopqrstuvwxyz',
  upChar:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numChar:'1234567890',
  specChar:'!@#$%^&*()-',
};

let userCharString = "";
let passwordLengthResponse;
let passwordOutput = "";

// BUTTON EVENT LISTENER
document.getElementById('UIitem submit').addEventListener('click', generatePassword);

function generatePassword () {
  userCharString = "";
  passwordOutput = "";
  howLongDoYouWantYourPassword();
  generatePasswordString();
  randomizer();
  document.getElementById('passwordOutput').innerHTML = passwordOutput;
}

// ****GET PASSWORD LENGTH****
function howLongDoYouWantYourPassword() {
  passwordLengthResponse = prompt("Enter Desired Length of password, between 6 and 20 characters.");
  passwordLengthResponse = parseInt(passwordLengthResponse);
  //invalid characters
  if (isNaN(passwordLengthResponse) == true){
    alert('Please enter only numerical integer values.');
    howLongDoYouWantYourPassword();
  } 
  //invalid length
  if (passwordLengthResponse < 6) {    
    alert('Password length must be greater than 6.');
  howLongDoYouWantYourPassword();
  } else if (passwordLengthResponse > 20) {
    alert('Password length must be less than 20.');
  howLongDoYouWantYourPassword();}
  //input accepted
  console.log(passwordLengthResponse);
  return passwordLengthResponse
};

//GENERATE PASSWORD STRING
function generatePasswordString(){
  let lowCharResponse = confirm('Do you want to include lower case letters?');
      if (lowCharResponse == true) {
        userCharString = userCharString + charSets.lowChar;
        console.log(userCharString);
      } else {
        console.log('Lower Case Characters Omitted');
      };
  let upCharResponse = confirm('Do you want to include upper case letters?');
      if (upCharResponse == true) {
        userCharString = userCharString + charSets.upChar;
        console.log(userCharString);
      } else {
        console.log('Upper Case Characters Omitted');
      };
  let numCharResponse = confirm('Do you want to include numbers?');
      if (numCharResponse == true) {
        userCharString = userCharString + charSets.numChar;
        console.log(userCharString);
      } else {
        console.log('Numbers Omitted');
      };
  let specCharResponse = confirm('Do you want to include special characters?');
      if (specCharResponse == true) {
        userCharString = userCharString + charSets.specChar;
        console.log(userCharString);
      } else {
        console.log('Special Characters Omitted');
      };
//if no characters selected
if (userCharString == ''){
    alert('User must make at least one selection for included characters.');
    generatePasswordString();
  } else {
    // console.log(`The character string to be used for randomizer is ${userCharString}`);
    return userCharString;
  }
};

//GENERATE RANDOM STRING FROM USER INPUTS
  function randomizer(){
    
    for(i = 0; i < passwordLengthResponse; i++){
      let singlePasswordCharacter;
      console.log(userCharString.length);
      singlePasswordCharacter = userCharString[Math.floor(Math.random()*userCharString.length)];

      passwordOutput = passwordOutput + singlePasswordCharacter;
      
    // console.log('randomizer has been triggered, iteration cycles should match passwordLengthResponse');

    //console.log(`The character string to be used for randomizer is ${userCharString}`);
  };
}

console.log(Math.random()*userCharString.length);