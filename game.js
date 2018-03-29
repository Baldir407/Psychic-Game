// Letter array choices for the computer
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting to nill ie; ZERO
var wins = 0;
var losses = 0;
var guesses = 13;
var guessesLeft = 13;
var guessedLetters = [];
var letterToGuess = null;

// Lets the computer actually pick a number instead of the code being, you know, dumb
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//This will allow the user 13 guesses. More than enough to not look foolish!
// guesses = guesses || 13
var updateGuessesLeft = function() {
    // Here we are grabbing that HTML element and setting it equal to the guessesLeft. Should display guessesLeft to the html
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
  };

  var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  };
  var updateGuessesSoFar = function() {
    // Here we take the guesses the user has tried and display it as letters separated by commas
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
  };
  // Function will be called when we reset everything. I SAID EEEEVEEERRRYYTHING
  var reset = function() {
    totalGuesses = 13;
    guessesLeft = 13;
    guessedLetters = [];
  
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
  }
  
  updateLetterToGuess();
  updateGuessesLeft();
  
  
  //At key release it is the user's guess and it is auto lower cased.
  document.onkeyup = function(event) {
      guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();
  
          if (guessesLeft > 0){
              if (userGuess == letterToGuess){
                  wins++;
                  document.querySelector('#wins').innerHTML = "Wins: " + wins;
                  alert("You did it! You managed to guess the right letter within 13 tries!");
                  reset();
              }
          }else if(guessesLeft == 0){
              // Then we will loss and we'll update the html to display the loss 
              losses++;
              document.querySelector('#losses').innerHTML = "Losses: " + losses;
              alert("BZZZZT! Not psychic! Looks like mobile infantry is for you. Unless...try again?");
              // Then we'll call the reset. 
              reset();
          }
  };
    