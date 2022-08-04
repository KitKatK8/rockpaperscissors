
//messed up somewhere around adding win parameters and changing inner text. fix me.
//cache the dom and include setting score
let userScore=0;
let computerScore=0;
let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan= document.getElementById("computer-score");
let result = document.querySelector(".result > p");
let choices = document.getElementsByClassName("choices");
let rockBtn = document.getElementById("r");
let paperBtn = document.getElementById("p");
let scissorsBtn = document.getElementById("s");
let actionMessage = document.getElementById("action-message");

//game func userChoice is just a string/parameter. How does this know to putt event listener? OH DUH from game() function referenced in event listeners
function game(userChoice) {
    computerChoice = getComputerChoice();
    console.log(userChoice + "    " + computerChoice);
    switch(userChoice + computerChoice){
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;
        case "ps":
        case "sr":    
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
    }
    
}

//EventListeners
function main() {
    rockBtn.addEventListener('click', function() {
    game("r");
    })

    paperBtn.addEventListener('click', function() {
        game("p");
    })

    scissorsBtn.addEventListener('click', function() {
        game("s");
    })
}
// icrement userScore and equate/set to html user score
//result text doesn't update until parameters added to win?
//trying to create change textfunction outside of win. 

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}



function win(userChoice, computerChoice) {
    console.log("you win");
    userScore++;
    userScoreSpan.innerHTML = userScore;
    result.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
    winText();
    

}

function lose(userChoice, computerChoice) {
    console.log("you lose");
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You lose.";
    console.log()

}

function tie(userChoice, computerChoice) {
    console.log("It's a tie");
    result.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". It's a Tie.";
}

main();

function getComputerChoice(){
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
/* //}

//function main();
/*
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Match.random()*3);
    return choices[randomNumber];
}

function game(userChoice){
    computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            function win()
            break;
        case "rp":
        case "ps":
        case "sr":
            function lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            function tie();    
            break;
    }
}

function win() {

    console.log("user wins");

 */