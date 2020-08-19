function choose(playerChoice){  
  let result = document.getElementById("result")
  let computerChoice = getComputerChoice();
  if(playerChoice == computerChoice){
    console.log("tie")
    result.innerHTML = `
      <h3>The computer chose ${computerChoice}, so its a tie!</h3>
      `
  }
  else if(playerChoice == "scissors"){
    if(computerChoice == "rock"){
      console.log("lose")
      result.innerHTML = `
      <h3>The computer chose ${computerChoice}, so you lose!</h3>
      `
    }
    else{
      console.log("win")
      result.innerHTML = `
      <h3>The computer chose ${computerChoice}, so you win!</h3>
      `
    }
  }
  else if(playerChoice == "paper"){
    if(computerChoice == "rock"){
      console.log("win")
      result.innerHTML = `
      <h3>The computer chose ${computerChoice}, so you win!</h3>
      `
    }
    else{
      if(computerChoice == "scissors"){
        console.log("lose")
        result.innerHTML = `
        <h3>The computer chose ${computerChoice}, so you lose!</h3>
      `
      }
    }
  }
  else{
    if(computerChoice == "paper"){
      console.log("lose")
      result.innerHTML = `
      <h3>The computer chose ${computerChoice}, so you lose!</h3>
      `
    }
    else{
      if(computerChoice == "scissors"){
        console.log("win")
        result.innerHTML = `
        <h3>The computer chose ${computerChoice}, so you win!</h3>
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
}
