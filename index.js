/** This game will be play by player against a computer 
 *  The flow of this game, call playGame function and player will play five round against computer
 *  playGame calls it's argument playRound 5 times.
 *  playRound takes in 2 paramters which are playerChoice, and computerChoice, and decide who
 *  win this round and prompt this message to screen
 *  playRound will also update the 2 variables total human score and total computer score in global scope
 *  We also need a getPlayerChoice function to get user input and return this user choice.
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
    if (rand <= 1/3) {
        return "rock";
    }
    else if (rand <= 2/3) {
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
    let playerChoice = prompt("Please enter Rock, Paper, or Scissors: ").toLowerCase().trim();
    const invalidChoice = !(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"); 
    while (!(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")) {
        playerChoice = prompt("Invalid Choice, please enter again! Rock, Paper, or Scissors: ").toLowerCase().trim();
    }
    return playerChoice;
}

// console.log("hahahah");