/** This game will be play by player against a computer 
 *  The flow of this game, call playGame function and player will play five round against computer
 *  playGame calls it's argument playRound 5 times.
 *  playRound takes in 2 paramters which are humanChoice, and computerChoice, and decide who
 *  win this round and prompt this message to screen
 *  playRound will also update the 2 variables total human score and total computer score in global scope
 *  We also need a gethumanChoice function to get user input and return this user choice.
 *  and also a getComputerChoice function to return a random choices (rock, paper or scissors).
 *  
*/

// Pseudocode

// DEFINE getComputedChoice function
//     CALL Math.random to return a random number which greater than or equal to 0 and less than 1
//     STORE this random number into a variable
//     IF random number less than or equal to 1/3 THEN 
//         RETURN "rock"
//     ELSE IF random number  less than or equal to 2/3 THEN 
//         RETURN "paper"
//     ELSE
//         RETURN "scissors"
//     ENDIF

function getComputerChoice() {
    const rand = Math.random()
    if (rand <= 1 / 3) {
        return "rock";
    }
    else if (rand <= 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// DEFINE getHumanChoice function
//     PROMPT player to answer their what are his/her choice
//     PREPROCESS player's choice to lower case letter and strip out white spaces
//     RETURN this preprocessed player's choice

function getHumanChoice() {
    let humanChoice = prompt("Please enter Rock, Paper, or Scissors: ").toLowerCase().trim();
    const invalidChoice = !(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors");
    while (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        humanChoice = prompt("Invalid Choice, please enter again! Rock, Paper, or Scissors: ").toLowerCase().trim();
    }
    return humanChoice;
}




function playGame() {
    // DECLARE variable humanScore
    // DECLARE variable computerScore
    // INITIALIZE humanScore to 0
    // INITIALIZE computerScore to 0

    let humanScore = 0;
    let computerScore = 0;

    // DEFINE playRound function
    //     RECEIVE 2 arguments as input 
    //         argument humanChoice
    //         argument computerChoice

    //     IF human choice is equal to "rock"
    //         THEN IF computer choice is equal to "rock"
    //             THEN PRINT this is a tie game 
    //         THEN ELSE IF computer choice is equal to "paper"
    //             THEN PRINT computer wins this game
    //             THEN INCREMENT computerScore
    //         THEN ELSE IF computer choice is equal to "scissors"
    //             THEN PRINT human wins this game
    //             THEN INCREMENT humanScore

    //     when human plays rock, computer plays rock. TIE
    //     when human plays rock, computer plays paper. COMPUTER WINS 
    //     when human plays rock, computer plays scissors. HUMAN WINS

    //     when human plays paper, computer plays rock. HUMAN WINS
    //     when human plays paper, computer plays paper. TIE
    //     when human plays paper, computer plays scissors. COMPUTER WINS

    //     when human plays scissors, computer plays rock. COMPUTER WINS
    //     when human plays scissors, computer plays paper. HUMAN WINS
    //     when human plays scissors, computer plays scissors. TIE

    function playRound(humanChoice, computerChoice) {
        console.log(`Human choice: ${humanChoice}, Computer choice: ${computerChoice}`);
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("This is a tie round!");
            }
            else if (computerChoice === "paper") {
                console.log("Computer won this round!");
                computerScore++;
            }
            else if (computerChoice === "scissors") {
                console.log("You won this round!");
                humanScore++;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You won this round!");
                humanScore++;
            }
            else if (computerChoice === "paper") {
                console.log("This is a tie round!");
            }
            else if (computerChoice === "scissors") {
                console.log("Computer won this round!");
                computerScore++;
            }
        }
        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("Computer won this round!");
                computerScore++;
            }
            else if (computerChoice === "paper") {
                console.log("You won this round!");
                humanScore++;
            }
            else if (computerChoice === "scissors") {
                console.log("This is a tie round!");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("Congratz! You won this 5 games overall");
    }
    else if (humanScore < computerScore) {
        console.log("Unfortunately, you lost the game...");
    }
    else {
        console.log("This is a tie game. Not too bad!");
    }

    console.log(`Player score: ${humanScore}, Computer score: ${computerScore}`);
}