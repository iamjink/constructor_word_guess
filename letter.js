var inquirer = require("inquirer");

//picking a random letter to guess for user:
// var emptyLetter = "";

// var randomLetter = function () {
//     var alphabet = "abcdefghijklmnopqrstuvwxyz";
//     while (emptyLetter.length < 1) {
//         emptyLetter += alphabet[Math.floor(Math.random() * alphabet.length)];
//     }
// }
// randomLetter();
// var letter = new Letter(emptyLetter);


//Letter constructor to be used in word.js. if user didn't make a right guess, 
//then the letter is replaced by "_"
function Letter(letter) {
    this.letter = letter;
    this.userguess = false;

    this.toString = function () {
        if (this.letter === " ") {
            this.userguess = true;
            return " ";
        } else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    }

    this.guess = function (guess) {
        if (guess === this.letter) {
            this.userguess = true;
        }
    }
};

module.exports = Letter;



// inquirer
//     .prompt([{
//         name: "letter",
//         message: "? Guess a letter!",
//         type: "string"
//     }]).then(function (answer) {
//         if (answer.letter == letter.name) {
//             console.log(answer.name);

//             console.log("Correct!!!")
//         } else {
//             console.log(answer.name);
//             console.log("Incorrect!!!");
//         }
//     });