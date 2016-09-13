//requiring modules
var inquirer = require('inquirer')
var word = require('./word.js');
var letter = require('./letter.js');
var game = require('./game.js');
//setting modules to variables
// var wordCheck = new word(gameWord)


//declaring global variables for modules to use
var wordArray = ["Ham", "Pork", "Curry", "Salmon", "Cilantro", "Popcorn", "Brownies"]
var lettersGuessed = [];
var matchedGuess = [];
var wordGuessed = false;
var userGuess = "";


var pick = new game(wordArray);
var gameWord = pick.selectedWord.toLowerCase();
var guessesLeft = gameWord.split("").length + 3;
console.log(gameWord);
var display = new letter(userGuess.toLowerCase(),gameWord);
display.lines();

inquirer.prompt([
	{
		type: "input",
		message: "Please choose a letter:",
		name: "letterGuess",
	}
]).then(function(user) {
	console.log("Your Guess: " + user.letterGuess);
	var checker = new word(user.letterGuess.toLowerCase(),gameWord);
	checker.checkGuess();
	display.lines();


});