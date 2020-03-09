var inquirer = require("inquirer");
var Word = require("./word.js");

var letterChoices = "abcdefghijklmnopqrstuvwxyz";

var wordChoices = [
    "taipei",
    "beijing",
    "new delhi",
    "tokyo",
    "manila",
    "jakarta",
    "dhaka",
    "london",
    "berlin",
    "kyiv",
    "mexico city",
    "brasilia",
    "luanda",
    "pretoria",
    "paris",
    "phnom penh",
    "tashkent",
    "stockholm",
    "bucharest",
    "budapest",
    "warsaw",
    "minsk",
    "kuala lumpur",
    "kuwait city",
    "ottawa",
    "jerusalem",
    "kingston",
    "washington",
    "asuncion",
    "athens",
    "sofia",
    "cairo",
    "madrid",
    "santiago",
    "rome",
    "prague",
    "amsterdam"


]

var randomizedIndex = Math.floor(Math.random() * wordChoices.length);
var randomWord = wordChoices[randomizedIndex];

//creates new object using Word constructor
var wordtoGuess = new Word(randomWord);

var newWordrequired = false;

var wrongGuesses = [];
var correctGueses = [];

var guessesLeft = 10;

function Game() {
    //if new word required is true, then create a new word object, and set new word required to false;
    if (newWordrequired) {
        var randomizedIndex = Math.floor(Math.random() * wordChoices.length);
        var randomWord = wordChoices[randomizedIndex];

        //creates new object using Word constructor
        var wordtoGuess = new Word(randomWord);

        var newWordrequired = false;
    }
    
    var completedWord = [];
    wordtoGuess.guessArray.forEach(check);

    if (completedWord.includes(false)) {
        inquirer.prompt([{
            type: "input",
            message: "guess a letter!",
            name: "guessInput"
        }]).then(function (input) {
            if (!letterChoices.includes(input.guessInput) ||
                input.guessInput.lenght > 1
            ) {
                console.log("\n Try again \n");

            } else {
                if (wrongGuesses.includes(input.guessInput) ||
                    correctGueses.includes(input.guessInput) ||
                    input.guessInput === "") {
                    console.log("\n Already guessed or please enter a letter \n");
                    Game();
                } else {
                    //check if guess is correct

                    var wordCheckArr = [];
                    wordtoGuess.userGuess(input.guessInput);
                    wordtoGuess.guessArray.forEach(checkWord);

                    if (wordCheckArr.join("") === completedWord.join("")) {
                        console.log("\n Wrong \n");

                        wrongGuesses.push(input.guessInput);
                        guessesLeft--
                    } else {
                        console.log("\nCorrect~\n");
                        correctGueses.push(input.guessInput);

                    }

                    wordtoGuess.print();

                    console.log("letters guessed: " + wrongGuesses.join(" ") + "\n");

                    console.log("guesses left: " + guessesLeft + "\n");

                    if (guessesLeft > 0) {
                        Game();
                    } else {
                        console.log("you lost!\n");
                        restartGame();
                    }

                    function checkWord(inputLetter) {
                        wordCheckArr.push(inputLetter.guessed);
                    }
                }
            }
        })
    } else {
        console.log("You WIN!!! \n");
        restartGame();
    }

    function check(inputLetter) {
        completedWord.push(inputLetter.guessed);
    }
}

function restartGame() {
    inquirer.prompt([{
            type: "list",
            message: "Would you like to:",
            choices: ["Play again", "Exit"],
            name: "restart"

        }

    ]).then(function (input) {
        if (input.restart == "Play again") {
            newWordrequired = true;
            wrongGuesses = [];
            correctGuese = [];
            guessesLeft = 10;
            Game();
        } else {
            return;
        }
    })
}

Game();