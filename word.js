// var inquirer = require("inquirer");
var Letter = require("./letter.js");

//Word constructor
function Word(answer) {
    this.guessArray = [];

    //any letter user makes gets pushed into guessArray
    for (let i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.guessArray.push(letter);
    }
    //logs user guess letters
    this.print = function () {
        for (let i = 0; i < guessArray.length; i++) {
            console.log(guessArray[i] + " " + "\n-----------------------\n");
        }
    }

    //checks to see if user guess is correct
    this.userGuess = function (userInput) {
        for (let i = 0; i < guessArray.length; i++) {
            this.guessArray[i].guess(userInput)

        }
    };
}

module.exports = Word;