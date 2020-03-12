var inquirer = require("inquirer");


//game only works with one letter instead of a word/ user can guess the randomly chosen letter
//picking a random letter to guess for user:
var emptyLetter = "";

var randomLetter = function () {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    while (emptyLetter.length < 1) {
        emptyLetter += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}
randomLetter();
var letter = new Letter(emptyLetter);
console.log(letter.value);

//Letter constructor to be used in word.js. if user didn't make a right guess, 
//then the letter is replaced by "_"
function Letter(value) {
    this.value = value;
    this.userguess = false;

    this.toString = function () {
        if (this.value === " ") {
            this.userguess = true;
            return " ";
        } else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.value;
            }
        }
    }

    this.guess = function (guess) {
        if (guess === this.value) {
            this.userguess = true;
        }
    }
};

inquirer
        .prompt([{
            name: "name",
            message: "? Guess a letter!",
            type: "string"
        }]).then(function (answer) {
            if (answer.name == letter.value) {
                console.log(answer.name);

                console.log("Correct!!!")

            } else {
                console.log(answer.name);
                console.log("Incorrect!!!");

            }
        });


module.exports = Letter;