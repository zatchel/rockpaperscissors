function computerPlay(){
        var randomNum = Math.random() *100
        var roundRandNum = Math.floor(randomNum);
    if(roundRandNum >= 0 && roundRandNum <=33){
        return "rock";
    }
        else if(roundRandNum >= 34 && roundRandNum <=66){
            return "paper";
        }
        else{
            return "scissors";
        }
        }
    
    function humanPlay(){
        var userInput = prompt("Let's play Rock, paper, scissors! Type in your selection in the box below.")
        var usableInput = userInput.toLowerCase();
      return usableInput;
        }

    
    
    
    function play(playerSelection, computerSelection){
        playerSelection = humanPlay();
        computerSelection = computerPlay();
        
      if(playerSelection === computerSelection){
          return "You and the AI chose the same thing, it's a draw."
      }
       if(playerSelection === "rock" && computerSelection === "scissors"){
          return "YOU WIN! You chose rock! The AI chose scissors! Rock smashes scissors!"
      }
             else if(playerSelection === "rock" && computerSelection != "scissors"){
                    return "YOU LOSE! You chose rock! The AI chose Paper! Paper covers rock!"
            }
            
      if(playerSelection === "paper" && computerSelection === "rock"){
          return "YOU WIN! You chose paper! The AI chose rock! Paper covers rock!"
      }
            else if(playerSelection === "paper" && computerSelection != "rock"){
                    return "YOU LOSE! You chose paper! The AI chose scissors! Scissors cuts paper!"
            }
    if(playerSelection === "scissors" && computerSelection === "paper"){
          return "YOU WIN! You chose scissors! The AI chose paper! Scissors cuts paper!"
      }
            else if(playerSelection === "scissors" && computerSelection != "paper"){
                    return "YOU LOSE! You chose scissors! The AI chose rock! Rock smashes scissors!"
            }
    
            
    }

    
console.log(play());   
