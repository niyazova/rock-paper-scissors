const rock  = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const btn = document.getElementById('btn')

rock.addEventListener('click', function(){
  const result = document.getElementById('userChoice')
  result.innerHTML = `<img src="./assets/rock.svg" height="85px" alt=""> `
})
paper.addEventListener('click', function(){
    const result = document.getElementById('userChoice')
    result.innerHTML = `<img src="./assets/hand.svg" height="85px" alt=""> `
})
scissors.addEventListener('click', function(){
    const result = document.getElementById('userChoice')
    result.innerHTML = `<img src="./assets/scissors.jpg" height="85px" alt="">`
})
const audio  = new Audio();
audio.src = "./01.wav"

const computerChoiceDisplay = document.getElementById('compChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.box')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  generateComputerChoice()
  getResult()
}))


function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1

if (randomNumber === 1) {
  compChoice = `<img src="./assets/rock.svg" height="85px" alt="">`
}
if (randomNumber === 2) {
  compChoice =  `<img src="./assets/hand.svg" height="85px" alt="">`
}
if (randomNumber === 3) {
  compChoice = `<img src="./assets/scissors.jpg" height="85px" alt="">`
}
computerChoiceDisplay.innerHTML = compChoice
}

function getResult() {
  if (compChoice === `<img src="./assets/rock.svg" height="85px" alt="">`&& userChoice === "scissors") {
    result = 'you lose!'
  }
  if (compChoice === `<img src="./assets/rock.svg" height="85px" alt=""></img>` && userChoice === "rock") {
    result = 'it\'s a draw!'
  }
  if (compChoice === `<img src="./assets/rock.svg" height="85px" alt=""></img>` && userChoice === "paper") {
    result = 'you win!'
  }
  if (compChoice ===  `<img src="./assets/hand.svg" height="85px" alt="">` && userChoice === "rock") {
    result = 'you lose!'
  }
  if (compChoice === `<img src="./assets/hand.svg" height="85px" alt="">` && userChoice === "paper") {
    result = 'it\'s a draw!'
  }
  if (compChoice ===`<img src="./assets/hand.svg" height="85px" alt="">` && userChoice === "scissors") {
    result = 'you win!'
  }
  if (compChoice ===`<img src="./assets/scissors.jpg" height="85px" alt="">` && userChoice === "rock") {
    result = 'you win!'
  }
  if (compChoice === `<img src="./assets/scissors.jpg" height="85px" alt="">` && userChoice === "paper") {
    result = 'you lose!'
  }
  if (compChoice === `<img src="./assets/scissors.jpg" height="85px" alt="">` && userChoice === "scissors") {
    result = 'it\'s a draw!'
  }
  resultDisplay.innerHTML = result
}



  