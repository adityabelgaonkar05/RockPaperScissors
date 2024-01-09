function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection)
    {
        return "Tie"
    }

    if(playerSelection.toLowerCase() == "rock")
    {
        if(computerSelection == "paper")
        {
            score-=1
            return "Computer wins"
            
        }

        else
        {
            score+=1
            return "You win"
            
        }
    }

    if(playerSelection.toLowerCase() == "paper")
    {
        if(computerSelection == "scissors")
        {
            score-=1
            return "Computer wins"
        }

        else
        {
            score+=1
            return "You win"
        }
    }

    if(playerSelection.toLowerCase() == "scissors")
    {
        if(computerSelection == "rock")
        {
            score-=1
            return "Computer wins"
        }

        else
        {
            score+=1
            return "You win"
        }
    }
  }

  function getComputerChoice()
  {
    let choice = Math.random()

    if(choice<0.3)
    {
        return "rock"
    }

    else if(choice>0.3 && choice<0.6)
    {
        return "paper"
    }

    else
    {
        return "scissors"
    }
  }
   
  let score = 0;

  let playerSelection = prompt("Enter Choice: ")
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
  playerSelection = prompt("Enter Choice: ")
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Enter Choice: ")
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Enter Choice: ")
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Enter Choice: ")
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

if(score == 0)
{
    console.log("MATCH ENDED WITH A TIE")
}

else if(score<0)
{
    console.log("YOU LOST")
}

else
{
    console.log("YOU WON")
}