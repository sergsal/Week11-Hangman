exports.guesses = function Words (guess, gameWord) {
	this.selWord = gameWord;
	this.wordArray = this.selWord.split("");
	this.guess = guess;
	this.lettersGuessed = [];
	this.matchedGuess = [];
	this.wordGuessed = false;
	this.checkGuess = function () {
		for (i=0; i < this.wordArray.length; i++) {
			if ((guess === this.wordArray[i]) && (this.matchedGuess.indexOf(guess) == -1)) {
				this.matchedGuess.push(guess);
				// this.lettersGuessed.push(guess);
				
				// console.log(this.lettersGuessed);
			} else {
				this.lettersGuessed.push(guess);
				// console.log(this.lettersGuessed);

			}; //end of if/else statment
		}; //end of for loop
		console.log(this.matchedGuess);
		console.log(this.lettersGuessed);
	}; //end of checkguess


};