function RandWord (wordArray) {
	this.selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];
};

module.exports = RandWord