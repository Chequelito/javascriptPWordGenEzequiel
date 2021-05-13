var letters = "qwertyuiopasdfghjklzxcvbnm";
var upLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";
var spcChar = "!@#$%^&*()_+:<>?";
var posChar = "";
var passwordBtnEl = $('#whatever');
var pswrdLength;
console.log(letters)

function promptUser() {
    posChar = ""
    pswrdLength = window.prompt("How long do you want your password?")
    if (pswrdLength < 8) {
        window.alert("Needs to be more than 8 characters")
        promptUser()
    }
    if (pswrdLength > 128) {
        window.alert("Needs to be less than 128 characters")
        promptUser()
    }
    var lowerCase = window.confirm("Do you want to use lower case letters?")
    var upperCase = window.confirm("Do you want to use upper case letters?")
    var numeros = window.confirm("Do you want to use numbers?")
    var characters = window.confirm("Do you want to use special characters?")
    if (lowerCase) {
        posChar += letters
    }
    if (upperCase) {
        posChar += upLetters
    }
    if (numeros) {
        posChar += numbers
    }
    if (characters) {
        posChar += spcChar
    }
    if (posChar === "") {
        window.alert("Must pick one characters set")
        promptUser()
    }
};

// function generate
// Write password to the #password input
function generatePassword() {
    promptUser()
    var password = passwordGenerator();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};


// Returns a string of concatenated characters of length num
function passwordGenerator() {
    var password = '';
    for (var i = 0; i < pswrdLength; i++) {
        var randomindex = Math.floor(Math.random() * posChar.length);

        password += posChar[randomindex];
    }
    return password;
};

passwordBtnEl.on('click', function () {
    console.log("syntax")
    generatePassword()

    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
});
