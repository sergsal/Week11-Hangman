//requiring modules
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



var pick = new game(wordArray);
var gameWord = pick.selectedWord;
console.log(gameWord)
