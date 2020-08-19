// let weapons = ["rock", "paper", "scissors"]



function choose(playerChoice){  
  let result = document.getElementById("result")
  let computerChoice = getComputerChoice();
  if(playerChoice == computerChoice){
    console.log("tie")
    result.innerText = `
      The computer chose ${computerChoice}, so its a tie!
      `
  }
  else if(playerChoice == "scissors"){
    if(computerChoice == "rock"){
      console.log("lose")
      result.innerText = `
      The computer chose ${computerChoice}, so you lose!
      `
    }
    else{
      console.log("win")
      result.innerText = `
      The computer chose ${computerChoice}, so you win!
      `
    }
  }
  else if(playerChoice == "paper"){
    if(computerChoice == "rock"){
      console.log("win")
      result.innerText = `
      The computer chose ${computerChoice}, so you win!
      `
    }
    else{
      if(computerChoice == "scissors"){
        console.log("lose")
        result.innerText = `
      The computer chose ${computerChoice}, so you lose!
      `
      }
    }
  }
  else{
    if(computerChoice == "paper"){
      console.log("lose")
      result.innerText = `
      The computer chose ${computerChoice}, so you lose!
      `
    }
    else{
      if(computerChoice == "scissors"){
        console.log("win")
        result.innerText = `
      The computer chose ${computerChoice}, so you win!
      `
      }
    }
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  if(choice == 0){
    return "rock"
  }
  else if(choice == 1){
    return "paper"
  }
  else{
    return "scissors"
  }
  // let weapon = weapons[index]
  // play(weapons)
}
