var inquirer = require("inquirer");

// Create a new Letter object

var emptyLetter = "";

var randomLetter = function () {
    
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    while (emptyLetter.length < 1) {
        emptyLetter += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}

randomLetter();
console.log(emptyLetter);
var letter = new Letter(emptyLetter);

console.log(letter.name);

//letter constructor
function Letter(name) {
    this.name = name;
};




inquirer
    .prompt([{
        name: "letter",
        message: "? Guess a letter!",
        type: "string"
    }]).then(function (answer) {
        if (answer.letter == letter.name) {
            console.log(answer.name);

            console.log("Correct!!!")
        } else {
            console.log(answer.name);
            console.log("Incorrect!!!");
        }
    });