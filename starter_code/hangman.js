var hangman;

class Hangman {
  constructor() {
    this.words = ["Esel", "Ente", "Car"];
    this.secretWord = "";
    this.letters = ["A", "B", "C"];
    this.guessedLetter = "";
    this.errorsLeft  = (guessedLetter) =>{
      var tries = 10;
      if (!secretWord.contains(guessedLetter)) {
       return tries - 1
      };
    }
  }
    getWord(){
      this.secretWord =  this.words[Math.floor(Math.random() * this.words.length)]
      return this.words[Math.floor(Math.random() * this.words.length)]
  };
  checkIfLetter(keyCode){
    if (keyCode < 91 && keyCode > 64){
      return true;
    }
    return false;
  }
  checkClickedLetters(letter){
  if (this.letters.includes(letter)){
    return false;
  }
  return true;
  }

  addCorrectLetter (){
    if (this.letters.contains(this.guessedLetter)){
      return false;
    }
  this.letters.push(this.guessedLetter);  
  return true;
  }
}



// function Hangman(words, secretWord, letters, guessedLetter, errorsLeft) {

//   this.words = [];
//   this.secretWord = "";
//   this.letters = [];
//   this.guessedLetter = "";
//   this.errorsLeft = function errorsLeft(guessedLetter) {
//     var tries = 10;
//     if (!secretWord.contains(guessedLetter)) {
//       this.errorsLeft = tries - 1;
//     }
//   };
// }

// Hangman.prototype.getWord = function() {
//   this.word = (words[Math.floor(Math.random() * words.length)]).toString();
//   return this.word;
// };

// Hangman.prototype.checkIfLetter = function(keyCode) {};

// Hangman.prototype.checkClickedLetters = function(key) {};

// Hangman.prototype.addCorrectLetter = function(i) {};

// Hangman.prototype.addWrongLetter = function(letter) {};

// Hangman.prototype.checkGameOver = function() {};

// Hangman.prototype.checkWinner = function() {};

// document.getElementById("start-game-button").onclick = function() {
//   hangman = new Hangman();
// };

// document.onkeydown = function(e) {};
