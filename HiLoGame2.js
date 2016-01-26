function numberGame() {

  var randomNumber = 0;

  var numberGuess = 0;

  var numTries = 1;

  randomNumber = Math.floor((Math.random() * 100) + 1);
  var userName = prompt("What's your name?");



  do {
    numberGuess = parseInt(prompt("Enter guess:"))


    if (numberGuess < 1 || numberGuess > 100) {
        alert("I told you to enter a number between 1 and 100, you idiot!\nYou just wasted a guess!\nGuesses used: " + numTries + " of 7")
    }
    else if (numberGuess > randomNumber) {
        alert("Number is too high!\nGuesses used: " + numTries + " of 7");
    }
    else if (numberGuess < randomNumber){
        alert("Number is too low!\nGuesses used: " + numTries + " of 7");
    }
    else if (isNaN(numberGuess)) {
      alert("Enter a NUMBER, you idiot!\nGuesses used: " + numTries + " of 7");
    }
    numTries++;
  }
  while (numberGuess != randomNumber && numTries < 7);
  if (numberGuess === randomNumber) {
    alert("You guessed " + randomNumber + " correctly, " + userName + "!");
  }
  else {
    alert("You suck, " + userName + "!\nThe number you were looking for was " + randomNumber + "!");
  }
};
