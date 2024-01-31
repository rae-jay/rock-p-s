console.log("does it just kinda go");



document.querySelector(".buttonGroup").addEventListener('click', (eek) => {
    let target = eek.target;

    switch(target.id){
        case "rockButt":
            playRound("rock");
            break;
        case "paperButt":
            playRound("paper");
            break;
        case "scissorButt":
            playRound("scissors");
            break;
    }
})



const displayText = document.querySelector(".displayText");
const scoreText = document.querySelector(".scoreText");

const rounds = 5;

let playerWins = 0;
let compWins = 0;

displayText.textContent = "please select rock, paper, or scissors";
scoreText.textContent = ":)";


function roundStart(){
    scoreText.textContent = "Computer " + compWins + "/You " + playerWins;

    if(playerWins >= (rounds+1)/2){
        displayText.textContent = "You win the game! Yay!";

        playerWins = 0;
        compWins = 0;
    }
    else if(compWins >= (rounds+1)/2){
        displayText.textContent = "You lost the game! Yay!";

        playerWins = 0;
        compWins = 0;
    }
}



function playRound(playerChoice){
    let computerChoice = getComputerChoice();

    if(playerChoice == computerChoice){
        displayText.textContent = "tie! please try again";
        //score display is sloppy, but in case the first pick of any round after the first is a tie, score
        //would otherwise be stuck on last round's numbers
        scoreText.textContent = "Computer " + compWins + "/You " + playerWins;
    }
    else{

        switch(playerChoice){
            case "rock":
                if(computerChoice == "paper"){
                    displayText.textContent = "you lose! paper covers rock";
                    compWins += 1;
                }else{
                    displayText.textContent = "you win! rock crushes scissors";
                    playerWins += 1;
                }
                break;
            ;
            case "paper":
                if(computerChoice == "scissors"){
                    displayText.textContent = "you lose! scissors cuts paper";
                    compWins += 1;
                }else{
                    displayText.textContent = "you win! paper covers rock";
                    playerWins += 1;
                }
                break;
            ;
            case "scissors":
                if(computerChoice == "rock"){
                    displayText.textContent = "you lose! rock crushes scissors";
                    compWins += 1;
                }else{
                    displayText.textContent = "you win! scissors cuts paper";
                    playerWins += 1;
                }
                break
            ;
            default:
                displayText.textContent = "something just went horribly wrong";
                break;
            ;
        }

        roundStart();
    }



function getComputerChoice(){
    let pick = Math.round(Math.random() * (3-1) +1)
    switch(pick){
        case 1:
            return "paper";
        
        case 2:
            return "scissors";
        
        case 3:
            return "rock";

        default:
            console.log("this shouldn't be possible");
            return "paper";
    }
}
}