var inquirer = require("inquirer");

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

