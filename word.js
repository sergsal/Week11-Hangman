var matchedGuess = [];
var lettersGuessed = [];
function Words (guess, gameWord) {
	this.wordArray = gameWord.split("");
	this.guess = guess;
	this.checkGuess = function () {
		for (i=0; i < this.wordArray.length; i++) {
			if ((guess === this.wordArray[i]) && (matchedGuess.indexOf(guess) == -1)) {
				matchedGuess.push(guess);
				// this.lettersGuessed.push(guess);
				
				// console.log(this.lettersGuessed);
			}
		}; //end of for loop
		console.log(matchedGuess);
		if ((lettersGuessed.indexOf(guess) == -1) && (this.wordArray.indexOf(guess) == -1)){
			
			lettersGuessed.push(guess);
			console.log("incorrect guesses: " + lettersGuessed);

		};
	}; //end of checkguess
	// this.updateGuess = function () {
	// 	if ((lettersGuessed.indexOf(guess) == -1) && (this.wordArray.indexOf(guess) == -1)){
			
	// 		lettersGuessed.push(guess);
	// 		console.log(lettersGuessed);
	// 	};
	// }


};
module.exports = Words