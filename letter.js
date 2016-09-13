var imported = require('./word.js');
var run = new imported("c","bat");

lettersGuessed = [];
matchedGuess = [];
wordGuessed = false;
function Display (guess, gameWord) {
	var wordView = "";
	this.wordArray = gameWord.split("");
	this.guess = guess;
	this.lines = function(){
		for(var i=0; i < this.wordArray.length; i++){
			if (matchedGuess.indexOf(this.wordArray[i]) != -1){
				wordView += this.wordArray[i];				
			}else{
				wordView += ' _ ';
			};
		};
		console.log(wordView)
	};
};
var check = new Display ("c","bat")
run.updateGuess();
check.lines();
