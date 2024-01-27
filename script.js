console.log("does it just kinda go");

/*
    get user prompt, get computer prompt, throw both into playRound
    playRound compares, prompts tie/invalid, or else gives result to gameResult
 */

playGame(5);    

function playGame(bestOfNum){
    let playerWins = 0;
    let compWins = 0;
    let keepGoing = true;
    
    while(keepGoing == true){
        if(playerWins >= 3){
            console.log("You win the game! Yay!");
            keepGoing = false;
        }
        else if(compWins >= 3){
            console.log("You lost the game! Yay!");
            keepGoing = false;
        }
        else{
            console.log("stats: comp " + compWins + "/you " + playerWins);
            let rResult = playRound(window.prompt("please select rock, paper, or scissors"), getComputerChoice());
            if(rResult == "win"){
                playerWins += 1;
            }
            else if(rResult == "loss"){
                compWins += 1;
            }
        }
    }
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

function playRound(playerChoiceInpt, computerChoice){
    let playerChoice = playerChoiceInpt.toLowerCase();
    
    let rResult = "tie";

    if(playerChoice == computerChoice){
        console.log("tie! please try again");
    }
    else{

        switch(playerChoice){
            case "rock":
                if(computerChoice == "paper"){
                    console.log("you lose! paper covers rock");
                    rResult = "loss";
                }else{
                    console.log("you win! rock crushes scissors");
                    rResult = "win";
                }
                break;
            ;
            case "paper":
                if(computerChoice == "scissors"){
                    console.log("you lose! scissors cuts paper");
                    rResult = "loss";
                }else{
                    console.log("you win! paper covers rock");
                    rResult = "win";
                }
                break;
            ;
            case "scissors":
                if(computerChoice == "rock"){
                    console.log("you lose! rock crushes scissors");
                    rResult = "loss";
                }else{
                    console.log("you win! scissors cuts paper");
                    rResult = "win";
                }
                break
            ;
            default:
                console.log("invalid input, try again")
                break;
            ;
        }
    }

    return rResult;
}