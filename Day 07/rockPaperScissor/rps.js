/* 1. Change the RPS Project
Change the if-else to switch-case as asked in the video(at 15:42). */
function rockPaperScissorGame() {
    console.log("Rock Paper Scissor Game");
    const userChoicePrompt = prompt("Enter Rock, Paper or Scissor");
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1: computerChoice = "rock"; break;
        case 2: computerChoice = "paper"; break;
        case 3: computerChoice = "scissor";
    }
    console.log("User selected", userChoice);
    console.log("Computer selected", computerChoice);
    if (
         (userChoice === "rock" && computerChoice === "scissor") ||
         (userChoice === "paper" && computerChoice === "rock") ||
         (userChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("YaHoo... you the user Win!!!")
    } else if (userChoice === computerChoice) {
        console.log("Game is a Tie")
    } else if(
         (userChoice === "rock" && computerChoice === "paper") ||
         (userChoice === "paper" && computerChoice === "scissor") ||
         (userChoice === "scissor" && computerChoice === "rock")
    ) {
        console.log("Oh Ho... Computer Win!!!")
    } else {
        console.log("User's choice is not proper")
    }
    const playAgainPrompt = prompt("Do you want to play again? yes/no");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

    
    if (playAgain === "yes") {
        rockPaperScissorGame();
    } else {
        console.log("Thanks for playing. See you next time!")
    }
}

rockPaperScissorGame();



/* 2. Build the Secret Number Guessing Game */