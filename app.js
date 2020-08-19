// let weapons = ["rock", "paper", "scissors"]

function choose(playerChoice){  
  let computerChoice = "rock"
  if(playerChoice == computerChoice){
    console.log("tie")
  }
  else if(playerChoice == "scissors"){
    if(computerChoice == "rock"){
      console.log("lose")
    }
    else{
      console.log("win")
    }
  }
  else if(playerChoice == "paper"){
    if(computerChoice == "rock"){
      console.log("win")
    }
    else{
      if(computerChoice == "scissors"){
        console.log("lose")
      }
    }
  }
  else{
    if(computerChoice == "paper"){
      console.log("lose")
    }
    else{
      if(computerChoice == "rock"){
        console.log("win")
      }
    }
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  if(choice == 0){
    let computerChoice = "rock"
  }
  else if(choice == 1){
    let computerChoice = "paper"
  }
  else{
    let computerChoice = "scissors"
  }
  // let weapon = weapons[index]
  // play(weapons)
}
