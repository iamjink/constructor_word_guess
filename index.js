var inquirer = require("inquirer");
var Word = require("./word");

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

function Game(){
    //if new word required is true, then create a new word object, and set new word required to false;
    if(newWordrequired) {
        var randomizedIndex = Math.floor(Math.random() * wordChoices.length);
        var randomWord = wordChoices[randomizedIndex];
        
        //creates new object using Word constructor
        var wordtoGuess = new Word(randomWord);
        
        var newWordrequired = false;
    }

    //
}