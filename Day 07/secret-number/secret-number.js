function guessSecretNumber() {
    console.log("Secret Number Guess Game.")
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let userNumber = prompt("Guess a number between 1 and 10");
    let userAttempt = 1;
    let flag = false;

    do {
        if (userNumber == secretNumber) {
            console.log("You have guessed the number in ", userAttempt, " attempts")
        } else if (userNumber > secretNumber) {
            console.log("Too high, Guess again");
            userNumber = prompt("Too high, Guess again");
            userAttempt += 1;
        } else if (userNumber < secretNumber) {
            console.log("Too low, Guess again");
            userNumber = prompt("Too low, Guess again");
            userAttempt += 1;
        } else {
            console.log("Not a valid option")
            flag = true;
            break;
        }

    } while (userNumber != secretNumber);

    
    if (userAttempt > 1 && flag === false) {
        console.log("Congrats! you have guessed in ", userAttempt, " attempts")
    }

    let playAgainPrompt = prompt("Want to play again?  y/n");
    let playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "n"
    if (playAgain === "y") {
        guessSecretNumber();
    } else {
        console.log("Thanks for playing. See you next time!")
    }

}
guessSecretNumber();
